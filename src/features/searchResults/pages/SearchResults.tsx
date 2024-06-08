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
import { StateType } from "../../../types/ItemsByQueryType";

const SearchResults = () => {
  const BASE_URL = "https://api.mercadolibre.com";

  const accessToken =
    "APP_USR-6094347472813542-060719-6cb9908623b4da3d2daf48b6b1eeff37-1525368630";

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
    fetchError: false,
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
    content = (
      <MainResults
        results={!isMobile ? pages[currentPage - 1] : results}
        pagination={isMobile ? "false" : "true"}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
    );
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
