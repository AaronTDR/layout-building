import { useEffect, useState } from "react";

/* Custom hooks */
import { useDebounce } from "../useDebounce/useDebounce";
import { useInfiniteScroll } from "../useInfiniteScroll/useInfiniteScroll";
import { useHttp } from "../useHttp/useHttp";

/* Utils */
import { buildUrl } from "../../utils/buildUrl/buildUrl";

const useInfiniteScrollResults = (initialState, query) => {
  const [state, setState] = useState(initialState);
  const [queryState, setQueryState] = useState(query);

  const { isMobile, isFirstRender, itemsPerPage, maxItemsAllowed, offset } =
    state;

  const { sendRequest } = useHttp();

  const BASE_URL = "https://api.mercadolibre.com";

  const accessToken =
    "APP_USR-6094347472813542-060517-66f0441043da6efac6361a1a8677eb2f-1525368630";

  const getResults = async (query, offset, itemsPerPage, maxItemsAllowed) => {
    console.log("🚀 ~ getResults ~ offset:", offset);
    try {
      setState((prevState) => ({
        ...prevState,
        loading: offset === 0,
        loadingMore: offset !== 0,
      }));

      const searchParams = {
        q: query,
        status: "active",
        app_version: "v2",
        condition: "new",
        offset,
        limit: itemsPerPage,
      };

      const searchURL = buildUrl(
        BASE_URL,
        "SEARCH",
        "/sites/MLM/search",
        searchParams
      );
      const data = await sendRequest(searchURL);

      const totalItems = data.paging.total;

      if (totalItems > maxItemsAllowed) {
        console.warn(
          `The number of results for this request exceeds the maximum limit that the ML API has set for public users. Therefore, the number of results has been adjusted accordingly.
          \nTotal paging: ${data.paging.total}
          \nMaximum allowed: 1000`
        );
      }

      const itemIds = data.results.map((result) => result.id);

      if (itemIds.length > 0) {
        const idsString = itemIds.join(",");

        const picturesParams = {
          ids: idsString,
          attributes: "id,pictures",
        };

        const picturesURL = buildUrl(
          BASE_URL,
          "MULTIGET",
          "/items",
          picturesParams
        );
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        const secondData = await sendRequest(picturesURL, null, headers);

        const completeResults = data.results.map((result) => {
          const matchingItem = secondData.find(
            (item) => item.code === 200 && item.body.id === result.id
          );
          if (matchingItem && matchingItem.body.pictures) {
            return {
              ...result,
              picturesArr: matchingItem.body.pictures,
            };
          }
          return result;
        });

        setState((prevState) => {
          const uniqueResults = [
            ...prevState.results,
            ...completeResults.filter(
              (newResult) =>
                !prevState.results.find(
                  (prevResult) => prevResult.id === newResult.id
                )
            ),
          ];
          return {
            ...prevState,
            results: uniqueResults,
          };
        });
      }
    } catch (error) {
      console.error("Error fetching results:", error);
      setState((prevState) => ({
        ...prevState,
        fetchError: "Could not get results, please try again later",
      }));
    } finally {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        loadingMore: false,
      }));
    }
  };

  const scrolledToBottomDebounced = useDebounce(
    useInfiniteScroll(isMobile, 1000, offset),
    250
  );

  useEffect(() => {
    if (isMobile && query) {
      if (isFirstRender) {
        setState((prevState) => ({ ...prevState, isFirstRender: false }));
      } else {
        if (query !== queryState) {
          setQueryState(query);
          setState((prevState) => ({
            ...prevState,
            resultsLoaded: false,
            results: [],
            offset: 0,
          }));

          window.scrollTo(0, 0);

          getResults(query, 0, itemsPerPage, maxItemsAllowed);
        } else {
          setState((prevState) => ({
            ...prevState,
            offset: prevState.offset + itemsPerPage,
          }));
        }
      }
    }
  }, [query, scrolledToBottomDebounced]);

  useEffect(() => {
    if (isMobile && query) {
      getResults(query, offset, itemsPerPage, maxItemsAllowed);
    }
  }, [offset]);

  return [state, setState];
};

export default useInfiniteScrollResults;
