import { useState, useEffect } from "react";

import { useLocation, useParams } from "react-router-dom";
import { isMobile } from "react-device-detect";
import {
  faFaceSadTear,
  faMagnifyingGlassMinus,
} from "@fortawesome/free-solid-svg-icons";

/* Custom hooks */
import useInfiniteScrollResults from "../../../hooks/useInfiniteScrollResults/useInfiniteScrollResults";
import usePaginationResults from "../../../hooks/usePaginationResults/usePaginationResults";

/* Components */
import Loading from "../../../components/loading/Loading";
import Message from "../../../components/message/Message";
import MainResults from "../components/mainResults/MainResults";
import Layout from "../../../components/layout/Layout";

/* Styles */
import styles from "./searchResults.module.css";

/* Types */
import { MainResultsType } from "../../../features/searchResults/components/mainResults/MainResultsType";
import { StateType } from "../../../types/ItemsByQueryType";

const SearchResults = () => {
  const BASE_URL = "https://api.mercadolibre.com";

  const accessToken =
    "APP_USR-6094347472813542-061420-61704922e3eef908651e370dbaffda76-1525368630";

  // Initial state used in both custom hooks
  const initialState: StateType = {
    isMobile,
    isFirstRender: true,
    itemsPerPage: 20,
    maxItemsAllowed: 1000,
    offset: 0,
    results: [],
    loading: false,
    loadingMore: false,
    resultsLoaded: false,
    fetchError: null,
    currentPage: 1,
    totalItems: 0,
    pages: [],
  };

  const { page } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  const [state, setState] = useState<StateType>(initialState);

  const [paginationState] = usePaginationResults(
    initialState,
    BASE_URL,
    accessToken,
    query,
    page
  );

  const [scrollingState] = useInfiniteScrollResults(
    initialState,
    BASE_URL,
    accessToken,
    query
  );

  useEffect(() => {
    if (isMobile) {
      setState(scrollingState);
    } else {
      setState(paginationState);
    }
  }, [paginationState, scrollingState]);

  const {
    currentPage,
    results,
    fetchError,
    loading,
    loadingMore,
    resultsLoaded,
    totalItems,
    itemsPerPage,
    pages,
  } = state;

  let content;

  const mainResultsProps: MainResultsType = isMobile
    ? {
        results,
        pagination: false,
      }
    : {
        results: pages[currentPage - 1],
        pagination: true,
        totalItems,
        itemsPerPage,
      };

  if (fetchError && !results.length) {
    content = (
      <Message
        icon={faFaceSadTear}
        title="Something went wrong"
        message="The search could not be completed. Please try again later."
      />
    );
  } else if (!results.length && !loading && !loadingMore && resultsLoaded) {
    content = (
      <Message
        icon={faMagnifyingGlassMinus}
        title="No results matching your search"
        message="Try checking your spelling or use more general terms"
      />
    );
  } else {
    content = <MainResults {...mainResultsProps} />;
  }

  return (
    <Layout css={styles.container}>
      {loading && !fetchError && (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      )}
      {content}

      {loadingMore && !loading && !fetchError && (
        <div className={styles.loadingMoreContainer}>
          <Loading />
        </div>
      )}
    </Layout>
  );
};
export default SearchResults;
