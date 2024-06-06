/* Custom hooks */
import { useHttp } from "../useHttp/useHttp";

/* Utils */
import { buildUrl } from "../../utils/buildUrl/buildUrl";

export const useGetResults = (
  isMobile,
  setState,
  BASE_URL,
  accessToken,
  itemsPerPage,
  maxItemsAllowed
) => {
  const { sendRequest } = useHttp();

  const getResults = async (query, offset) => {
    if (isMobile) {
      // *On mobile device
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

        const searchURL = buildUrl({
          BASE_URL,
          type: "SEARCH",
          endpoint: "/sites/MLM/search",
          params: searchParams,
        });
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

          const picturesURL = buildUrl({
            BASE_URL,
            type: "MULTIGET",
            endpoint: "/items",
            params: picturesParams,
          });
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
    } else {
      // *On desktop device
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
          const searchURL = buildUrl({
            BASE_URL,
            type: "SEARCH",
            endpoint: "/sites/MLM/search",
            params: searchParams,
          });
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
            const picturesURL = buildUrl({
              BASE_URL,
              type: "MULTIGET",
              endpoint: "/items",
              params: picturesParams,
            });
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
    }
  };

  return getResults;
};
