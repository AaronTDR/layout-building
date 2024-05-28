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
import { getResultsInfiniteScroll } from "../helpers/getResultsInfiniteScroll/getResultsInfiniteScroll";

import {
  SecondDataItemType,
  ResultsType,
  PagesType,
  QueryType,
} from "./SearchResultsType";
import { useDebounce } from "../../../hooks/useDebounce/useDebounce";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll/useInfiniteScroll";

const SearchResults = () => {
  const [loading, setLoading] = useState(false);
  console.log("🚀 ~ SearchResults ~ loading:", loading);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [results, setResults] = useState<ResultsType>([]);
  console.log("🚀 ~ SearchResults ~ results:", results);
  const [pages, setPages] = useState<PagesType>([]);
  const [fetchError, setFetchError] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [offset, setOffset] = useState(0);
  console.log("🚀 ~ SearchResults ~ offset:", offset);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  console.log("🚀 ~ SearchResults ~ loadingMore:", loadingMore);
  // difference between an initial state of loading and a state in which there are really no results
  const [resultsLoaded, setResultsLoaded] = useState(false);
  console.log("🚀 ~ SearchResults ~ resultsLoaded:", resultsLoaded);

  const { page } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  // Auxiliary state to manage changes in 'query'
  const [queryState, setQueryState] = useState(query);

  const maximumItemsAllowed = 1000;
  const maxOffsetAllowed = 980;
  const itemsPerPage = 20;
  const accessToken = "";

  // * On desktop
  // Go to top
  useEffect(() => {
    if (!isMobile) window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    if (!isMobile)
      if (query !== queryState) {
        setResultsLoaded(false);
        setPages([]);
        setQueryState(query);
      }
  }, [query]);

  useEffect(() => {
    if (!isMobile) {
      const currentPage = Number(page);
      // currentPage is updated every time the page changes to show the updated page at all times
      setCurrentPage(currentPage);

      if (!pages[currentPage - 1]) {
        const offset = currentPage * itemsPerPage - itemsPerPage;
        // fetchSearchResults(query, offset);
        getResultsPagination(
          query,
          offset,
          maximumItemsAllowed,
          itemsPerPage,
          setLoading,
          results,
          setResults,
          setFetchError,
          setTotalItems
        );
      }
    }
  }, [query, location, pages]);

  useEffect(() => {
    if (!isMobile) {
      setPages((prevPages) => {
        const updatedPages = [...prevPages];
        updatedPages[currentPage - 1] = results;
        return updatedPages;
      });
    }
  }, [results]);

  // * On mobile
  const scrolledToBottomDebounced = useDebounce(
    useInfiniteScroll(maxOffsetAllowed, offset),
    200
  );

  useEffect(() => {
    if (isMobile && query) {
      // If it is the first render, execution is canceled so as not to make a double request
      // if (isFirstRender) {
      //   setIsFirstRender(false);
      // } else {
      // Make a new request if query changes
      if (query !== queryState) {
        setResultsLoaded(false);
        setQueryState(query);
        setResults([]);
        // setCurrentCategory(0);
        setOffset(0);
        window.scrollTo(0, 0);

        getResultsInfiniteScroll(
          query,
          0,
          itemsPerPage,
          setResultsLoaded,
          setLoading,
          setLoadingMore,
          maximumItemsAllowed,
          results,
          setResults,
          setFetchError
        );
      } else {
        setOffset((prevOffset) => prevOffset + itemsPerPage);
        getResultsInfiniteScroll(
          query,
          offset,
          itemsPerPage,
          setResultsLoaded,
          setLoading,
          setLoadingMore,
          maximumItemsAllowed,
          results,
          setResults,
          setFetchError
        );
      }
      // }
    }
  }, [query, scrolledToBottomDebounced]);

  /*   useEffect(() => {
    if (isMobile && query) {
      getResultsInfiniteScroll(
        query,
        offset,
        itemsPerPage,
        itemsPerPage,
        setLoading,
        setLoadingMore,
        maximumItemsAllowed,
        results,
        setResults,
        setFetchError
      );
    }
  }, [offset]); */

  /*  const fetchSearchResults = async (query: QueryType, offset: number) => {
    try {
      setLoading(true);
      if (query) {
        const response = await fetch(
          `https://api.mercadolibre.com/sites/MLM/search?q=${encodeURIComponent(
            query
          )}&status=active&app_version=v2&condition=new&offset=${offset}&limit=${itemsPerPage}`
        );

        if (!response.ok) {
          setFetchError(true);
          console.error(
            `Failed to fetch search results. Status: ${response.status}`
          );
        }

        const data = await response.json();

        const totalItems = data.paging.total;

        if (totalItems <= maximumItemsAllowed) {
          setTotalItems(data.paging.total);
        } else {
          setTotalItems(maximumItemsAllowed);
        }

        totalItems > maximumItemsAllowed &&
          console.warn(
            `The number of results for this request exceeds the maximum limit that the ML API has set for public users. Therefore, the number of results has been adjusted accordingly.
  \nTotal paging: ${data.paging.total}
  \nMaximum allowed: 1000`
          );

        setResults(data.results);

        // Get IDs from results
        const itemIds = data.results.map((result: Item) => result.id);

        if (itemIds.length > 0) {
          // Make the second request with the IDs to get the ID and images of each item
          const idsString = itemIds.join(",");

          // The ML API receives a series of IDs, followed by the attributes that will be requested
          const secondResponse = await fetch(
            `https://api.mercadolibre.com/items?ids=${idsString}&attributes=id,pictures`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          if (!secondResponse.ok) {
            setFetchError(true);
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
          setResults((prevResults) => {
            return prevResults.map((result) => {
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
            });
          });
        }
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };
 */
  let content;

  if (fetchError && !results) {
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
