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

export const getResultsInfiniteScroll = async (state, setState) => {
  console.log("🚀 ~ getResultsInfiniteScroll ~ state:", state);
  const { query, offset, itemsPerPage, maxItemsAllowed } = state;
  console.log("🚀 ~ getResultsInfiniteScroll ~ offset:", offset);
  try {
    // Update loading state
    setState((prevState) => ({
      ...prevState,
      loading: offset === 0,
      loadingMore: offset !== 0,
    }));

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

    setState((prevState) => {
      const newResults = items.filter(
        (result: Item) =>
          !prevState.results.find((prev) => prev.id === result.id)
      );
      return {
        ...prevState,
        results: [...prevState.results, ...newResults],
        resultsLoaded: true,
      };
    });
  } catch (error) {
    console.error("Error fetching results:", error);
    setState((prevState) => ({
      ...prevState,
      setFetchError: "Could not get results, please try again later",
    }));
  } finally {
    setState((prevState) => ({
      ...prevState,
      loading: false,
      loadingMore: false,
    }));
  }
};
