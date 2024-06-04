import { useEffect, useState } from "react";

import { useDebounce } from "../useDebounce/useDebounce";
import { useInfiniteScroll } from "../useInfiniteScroll/useInfiniteScroll";
import { useHttp } from "../useHttp/useHttp";

const useInfiniteScrollResults = (initialState, query) => {
  const [state, setState] = useState(initialState);
  const [queryState, setQueryState] = useState(query);

  const { isMobile, isFirstRender, itemsPerPage, maxItemsAllowed, offset } =
    state;

  const fetchResults = async (query, offset, itemsPerPage, maxItemsAllowed) => {
    try {
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

      if (totalItems > maxItemsAllowed) {
        console.warn(
          `The number of results for this request exceeds the maximum limit that the ML API has set for public users. Therefore, the number of results has been adjusted accordingly.
          \nTotal paging: ${data.paging.total}
          \nMaximum allowed: 1000`
        );
      }

      const items = data.results;

      setState((prevState) => {
        const newResults = items.filter(
          (result) => !prevState.results.find((prev) => prev.id === result.id)
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
    350
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

          fetchResults(query, 0, itemsPerPage, maxItemsAllowed);
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
      fetchResults(query, offset, itemsPerPage, maxItemsAllowed);
    }
  }, [offset]);

  return [state, setState];
};

export default useInfiniteScrollResults;
