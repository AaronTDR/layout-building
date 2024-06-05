import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  faFaceSadTear,
  faMagnifyingGlassMinus,
} from "@fortawesome/free-solid-svg-icons";

/* Components */
import Loading from "../../../components/loading/Loading";
import Message from "../../../components/message/Message";
import MainResults from "../components/mainResults/MainResults";
import Layout from "../../../components/layout/Layout";

/* Styles */
import styles from "./searchResults.module.css";

/* Types */
import { Item } from "../../../types/ResultAPIType";

/* Helpers */
import { getResultsPagination } from "../helpers/getResultsPagination/getResultsPagination";
// import { getResultsInfiniteScroll } from "../helpers/getResultsInfiniteScroll/getResultsInfiniteScroll";
import useInfiniteScrollResults from "../../../hooks/useInfiniteScrollResults/useInfiniteScrollResults";

import {
  SecondDataItemType,
  ResultsType,
  PagesType,
  QueryType,
} from "./SearchResultsType";
import { useDebounce } from "../../../hooks/useDebounce/useDebounce";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll/useInfiniteScroll";

const SearchResults = () => {
  const initialScrollingState = {
    isMobile: true,
    isFirstRender: true,
    itemsPerPage: 20,
    maxItemsAllowed: 1000,
    offset: 0,
    results: [],
    loading: false,
    loadingMore: false,
    resultsLoaded: false,
    fetchError: false,
    // currentPage: 1,
    // totalItems: 0,
    // pages: [],
  };
  /*   const [state, setState] = useState({
    loading: false,
    currentPage: 1,
    totalItems: 0,
    itemsPerPage: 20,
    maxItemsAllowed: 1000,
    results: [],
    pages: [],
    fetchError: false,
    isMobile: true,
    offset: 0,
    isFirstRender: true,
    loadingMore: false,
    resultsLoaded: false,
  }); */
  // const [scrollState, getResultsInfiniteScroll, setScrollState] =
  //   useInfiniteScrollResults(initialState);

  const { page } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  // Auxiliary state to manage changes in 'query'
  // const [queryState, setQueryState] = useState(query);

  // const {
  //   isFirstRender,
  //   isMobile,
  //   currentPage,
  //   pages,
  //   results,
  //   offset,
  //   fetchError,
  //   loading,
  //   loadingMore,
  //   resultsLoaded,
  //   totalItems,
  //   itemsPerPage,
  // } = state;
  // const {
  //   isFirstRender,
  //   isMobile,
  //   currentPage,
  //   pages,
  //   results,
  //   offset,
  //   fetchError,
  //   loading,
  //   loadingMore,
  //   resultsLoaded,
  //   totalItems,
  //   itemsPerPage,
  //   maxItemsAllowed,
  // } = scrollState;

  const [scrollingState] = useInfiniteScrollResults(
    initialScrollingState,
    query
  );

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
    isMobile,
    // offset,
    // isFirstRender,
  } = scrollingState;
  console.log("🚀 ~ SearchResults ~ results:", results);

  // useEffect(() => {
  //   if (!isMobile) window.scrollTo(0, 0);
  // }, [currentPage]);

  // useEffect(() => {
  //   if (!isMobile) {
  //     if (query !== queryState) {
  //       setQueryState(query);
  //       setState((prevState) => ({
  //         ...prevState,
  //         resultsLoaded: false,
  //         pages: [],
  //       }));
  //     }
  //   }
  // }, [query]);

  // useEffect(() => {
  //   if (!isMobile) {
  //     const currentPage = Number(page);
  //     setState((prevState) => ({ ...prevState, currentPage }));
  //     if (!pages[currentPage - 1]) {
  //       const offset = currentPage * itemsPerPage - itemsPerPage;
  //       setState((prevState) => ({ ...prevState, offset }));
  //       getResultsPagination({ ...state, offset, query }, setState);
  //     }
  //   }
  // }, [pages, query, location]);

  // useEffect(() => {
  //   if (!isMobile) {
  //     setState((prevState) => {
  //       const updatedPages = [...prevState.pages];
  //       updatedPages[currentPage - 1] = results;
  //       return { ...prevState, pages: updatedPages };
  //     });
  //   }
  // }, [results]);

  // * On mobile

  // const scrolledToBottomDebounced = useDebounce(
  //   useInfiniteScroll(isMobile, 1000, offset),
  //   350
  // );

  // useEffect(() => {
  //   if (isMobile && query) {
  //     if (isFirstRender) {
  //       setScrollState((prevState) => ({ ...prevState, isFirstRender: false }));
  //     } else {
  //       if (query !== queryState) {
  //         setQueryState(query);
  //         setScrollState((prevState) => ({
  //           ...prevState,
  //           resultsLoaded: false,
  //           results: [],
  //           offset: 0,
  //         }));

  //         window.scrollTo(0, 0);

  //         getResultsInfiniteScroll(
  //           // { ...scrollState, query, offset: 0 },
  //           // setState
  //           query,
  //           0,
  //           itemsPerPage,
  //           maxItemsAllowed
  //         );
  //       } else {
  //         setScrollState((prevState) => ({
  //           ...prevState,
  //           offset: prevState.offset + itemsPerPage,
  //         }));
  //       }
  //     }
  //   }
  // }, [query, scrolledToBottomDebounced]);

  // useEffect(() => {
  //   if (isMobile && query) {
  //     getResultsInfiniteScroll(query, offset, itemsPerPage, maxItemsAllowed);
  //   }
  // }, [offset]);

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
        pagination={"false"}
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
