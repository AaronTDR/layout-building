import { useState, useEffect } from "react";

/* Custom hooks */
import { useGetResults } from "../useGetResults/useGetResults";

/* Types */
import { UsePaginationResultsType } from "./UsePaginationResultsType";

const usePaginationResults: UsePaginationResultsType = (
  initialState,
  BASE_URL,
  accessToken,
  query,
  page
) => {
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

  const getResults = useGetResults(
    isMobile,
    setState,
    BASE_URL,
    accessToken,
    itemsPerPage,
    maxItemsAllowed
  );

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
        getResults(query, offset);
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
