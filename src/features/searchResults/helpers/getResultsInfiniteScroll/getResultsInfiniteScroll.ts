export const getResultsInfiniteScroll = async (
  query,
  offset,
  itemsPerPage,
  limit,
  setLoading,
  setLoadingMore,
  maxItemsAllowed,
  results,
  setResults,
  setFetchError
) => {
  try {
    // If offset is 0 then it's loading results for the first time
    if (offset === 0) {
      setLoading(true);
    } else {
      // If offset is not 0 it's loading more results
      setLoadingMore(true);
    }
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLM/search?q=${encodeURIComponent(
        query
      )}&status=active&app_version=v2&condition=new&offset=${offset}&limit=${itemsPerPage}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const totalItems = data.paging.total;
    totalItems > maxItemsAllowed &&
      console.warn(
        `The number of results for this request exceeds the maximum limit that the ML API has set for public users. Therefore, the number of results has been adjusted accordingly.
  \nTotal paging: ${data.paging.total}
  \nMaximum allowed: 1000`
      );

    const items = data.results;

    setResults((prevResults) => {
      const newResults = items.filter(
        (result: Item) => !prevResults.find((prev) => prev.id === result.id)
      );
      return [...prevResults, ...newResults];
    });
  } catch (error) {
    console.error("Error fetching results:", error);
    setFetchError("Could not get results, please try again later");
  } finally {
    // Deactivates the corresponding charging states
    if (offset === 0) {
      setLoading(false);
    } else {
      setLoadingMore(false);
    }
  }
};
