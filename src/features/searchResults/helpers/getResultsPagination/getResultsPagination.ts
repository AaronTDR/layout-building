type State = {
  loading: boolean;
  currentPage: number;
  totalItems: number;
  results: ResultsType;
  pages: PagesType;
  fetchError: boolean;
  isMobile: boolean;
  offset: number;
  isFirstRender: boolean;
  loadingMore: boolean;
  resultsLoaded: boolean;
};

export const getResultsPagination = async (state, setState) => {
  const { query, offset, itemsPerPage, maxItemsAllowed, results } = state;

  try {
    setState((prevState) => ({ ...prevState, loading: true }));

    if (query) {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLM/search?q=${encodeURIComponent(
          query
        )}&status=active&app_version=v2&condition=new&offset=${offset}&limit=${itemsPerPage}`
      );

      if (!response.ok) {
        setState((prevState) => ({ ...prevState, setFetchError: true }));
        console.error(
          `Failed to fetch search results. Status: ${response.status}`
        );
      }

      const data = await response.json();

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

        // The ML API receives a series of IDs, followed by the attributes that will be requested
        const secondResponse = await fetch(
          `https://api.mercadolibre.com/items?ids=${idsString}&attributes=id,pictures` /* ,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            } */
        );

        if (!secondResponse.ok) {
          setState((prevState) => ({ ...prevState, fetchError: true }));
          if (secondResponse.status === 429) {
            console.warn(
              "WARNING: Too many requests, status: ",
              secondResponse.status
            );
            return results;
          }
          throw new Error(
            `Failed to fetch item pictures. Status: ${secondResponse.status}`
          );
        }

        const secondData = await secondResponse.json();
        // Update the results that were in the state by adding the 'pictureArr' property to each item which will contain the images obtained in secondResponse.
        setState((prevState) => {
          return {
            ...prevState,
            results: prevState.results.map((result) => {
              const matchingItem = secondData.find(
                (item: SecondDataItemType) =>
                  item.code === 200 && item.body.id === result.id
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
  } finally {
    setState((prevState) => ({ ...prevState, loading: false }));
  }
};
