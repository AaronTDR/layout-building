/* Custom hooks */
import { useHttp } from "../useHttp/useHttp";

/* Utils */
import { buildUrl } from "../../utils/buildUrl/buildUrl";

export const useGetResults = (
  setState,
  BASE_URL,
  accessToken,
  itemsPerPage,
  maxItemsAllowed
) => {
  const { sendRequest } = useHttp();

  const getResults = async (query, offset) => {
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

  return getResults;
};
