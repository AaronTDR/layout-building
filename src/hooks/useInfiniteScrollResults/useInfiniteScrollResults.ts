import { useEffect, useState } from "react";

/* Custom hooks */
import { useDebounce } from "../useDebounce/useDebounce";
import { useInfiniteScroll } from "../useInfiniteScroll/useInfiniteScroll";
import { useGetResults } from "../../hooks/useGetResults/useGetResults";

const useInfiniteScrollResults = (
  initialState,
  BASE_URL,
  accessToken,
  query
) => {
  const [state, setState] = useState(initialState);
  const [queryState, setQueryState] = useState(query);

  const { isMobile, isFirstRender, itemsPerPage, maxItemsAllowed, offset } =
    state;

  const getResults = useGetResults(
    isMobile,
    setState,
    BASE_URL,
    accessToken,
    itemsPerPage,
    maxItemsAllowed
  );

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

          getResults(query, 0);
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
      getResults(query, offset);
    }
  }, [offset]);

  return [state, setState];
};

export default useInfiniteScrollResults;
