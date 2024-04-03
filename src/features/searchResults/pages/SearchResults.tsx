import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import { SecondDataItemType } from "./SearchResultsType";
import { Item } from "../../../types/ResultAPIType";

type storedDataElement = Item[] | undefined;

const SearchResults = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [offset, setOffset] = useState(0);
  const [results, setResults] = useState<Item[]>([]);
  const [pages, setPages] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");
  // Auxiliary state to manage changes in 'query'
  const [queryState, setQueryState] = useState(query);

  const itemsPerPage = 20;

  const fetchSearchResults = async (query, offset) => {
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
        setTotalItems(data.paging.total);
        setResults(data.results);

        // Get IDs from results
        const itemIds = data.results.map((result) => result.id);

        if (itemIds.length > 0) {
          // Make the second request with the IDs to get the ID and images of each item
          const idsString = itemIds.join(",");

          // The ML API receives a series of IDs, followed by the attributes that will be requested
          const secondResponse = await fetch(
            `https://api.mercadolibre.com/items?ids=${idsString}&attributes=id,pictures`
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
                (item) => item.code === 200 && item.body.id === result.id
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

  useEffect(() => {
    if (query !== queryState) {
      setPages([]);
      setOffset(0);
      setCurrentPage(1);
      setQueryState(query);
    }
    if (!pages[currentPage - 1]) {
      fetchSearchResults(query, offset);
    }
  }, [query, currentPage]);

  useEffect(() => {
    setPages((prevPages) => {
      const updatedPages = [...prevPages];
      updatedPages[currentPage - 1] = results;
      return updatedPages;
    });
  }, [results]);

  let content;

  if (fetchError && !results) {
    content = (
      <Message
        icon={faFaceSadTear}
        title="Something went wrong"
        message="The search could not be completed. Please try again later."
      />
    );
  } else if (!results.length && !loading) {
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
        results={pages[currentPage - 1]}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setOffset={setOffset}
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
      {/*       <MainResults
        results={pages[currentPage - 1]}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setOffset={setOffset}
      /> */}
    </Layout>
  );
};

export default SearchResults;
