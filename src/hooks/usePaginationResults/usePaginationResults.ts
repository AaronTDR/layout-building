import { useState, useEffect } from "react";

/* Custom hooks */
import { useHttp } from "../useHttp/useHttp";

/* Utils */
import { buildUrl } from "../../utils/buildUrl/buildUrl";

const usePaginationResults = (initialState, query, page) => {
  const [state, setState] = useState(initialState);
  const [queryState, setQueryState] = useState(query);

  const {
    itemsPerPage,
    maxItemsAllowed,
    pages,
    results,
    isMobile,
    currentPage,
  } = state;

  const { sendRequest } = useHttp();

  const BASE_URL = "https://api.mercadolibre.com";

  const accessToken =
    "APP_USR-6094347472813542-060517-66f0441043da6efac6361a1a8677eb2f-1525368630";

  const getResults = async (query, offset, itemsPerPage, maxItemsAllowed) => {
    try {
      setState((prevState) => ({ ...prevState, loading: true }));

      if (query) {
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

        if (totalItems <= maxItemsAllowed) {
          setState((prevState) => ({
            ...prevState,
            totalItems: data.paging.total,
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            totalItems: maxItemsAllowed,
          }));
        }

        totalItems > maxItemsAllowed &&
          console.warn(
            `The number of results for this request exceeds the maximum limit that the ML API has set for public users. Therefore, the number of results has been adjusted accordingly.
  \nTotal paging: ${data.paging.total}
  \nMaximum allowed: 1000`
          );

        setState((prevState) => ({ ...prevState, results: data.results }));

        // Get IDs from results
        const itemIds = data.results.map((result: Item) => result.id);

        if (itemIds.length > 0) {
          // Make the second request with the IDs to get the ID and images of each item
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

          // Adds the 'pictureArr' property to each item which will contain the images obtained in secondResponse.
          setState((prevState) => {
            return {
              ...prevState,
              results: prevState.results.map((result) => {
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
              }),
            };
          });
        }
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setState((prevState) => ({
        ...prevState,
        fetchError: "Could not get results, please try again later",
      }));
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  useEffect(() => {
    if (!isMobile) window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    if (!isMobile) {
      if (query !== queryState) {
        setQueryState(query);
        setState((prevState) => ({
          ...prevState,
          resultsLoaded: false,
          pages: [],
        }));
      }
    }
  }, [query]);

  useEffect(() => {
    if (!isMobile) {
      const currentPage = Number(page);
      setState((prevState) => ({ ...prevState, currentPage }));
      if (!pages[currentPage - 1]) {
        const offset = currentPage * itemsPerPage - itemsPerPage;
        getResults(query, offset, itemsPerPage, maxItemsAllowed);
      }
    }
  }, [pages, query, location, page]);

  useEffect(() => {
    if (!isMobile) {
      setState((prevState) => {
        const updatedPages = [...prevState.pages];
        updatedPages[currentPage - 1] = results;
        return { ...prevState, pages: updatedPages };
      });
    }
  }, [results]);

  return [state, setState];
};

export default usePaginationResults;
