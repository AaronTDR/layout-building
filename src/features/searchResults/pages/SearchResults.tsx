import { useEffect, useState } from "react";
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

type Picture = { id: string; url: string };

type PicturesArr = Picture[];

type Item = {
  id: string;
  title: string;
  original_price: number | null;
  price: number;
  official_store_name: string;
  shipping: { free_shipping: string | null };
  picturesArr?: PicturesArr;
};

type SecondDataItem = {
  code: number;
  body: {
    id: string;
    pictures?: Picture[]; // Un array opcional de URLs de imágenes
    // Otros campos si los hay
  };
};

const SearchResults = () => {
  const [results, setResults] = useState<Item[]>([]);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        if (query) {
          const response: Response = await fetch(
            `https://api.mercadolibre.com/sites/MLM/search?q=${encodeURIComponent(
              query
            )}&status=active&app_version=v2&condition=new&offset=0&limit=20`
          );

          if (!response.ok) {
            setFetchError(true);
            console.error(
              `Failed to fetch search results. Status: ${response.status}`
            );
          }

          const data = await response.json();
          setResults(data.results);

          // Get IDs from results
          const itemIds = data.results.map((result: Item) => result.id);

          if (itemIds.length > 0) {
            // Make the second request with the IDs to get the ID and images of each item
            const idsString = itemIds.join(",");
            console.log("🚀 ~ fetchSearchResults ~ idsString:", idsString);

            // The ML API receives a series of IDs, followed by the attributes that will be requested
            const secondResponse: Response = await fetch(
              `https://api.mercadolibre.com/items?ids=${idsString}&attributes=id,pictures`
            );
            console.log("🚀 ~ secondResponse:", secondResponse);

            if (!secondResponse.ok) {
              setFetchError(true);
              if (secondResponse.status === 429) {
                console.log("ERROR");
                return results;
              }
              throw new Error(
                `Failed to fetch item details. Status: ${secondResponse.status}`
              );
            }

            const secondData = await secondResponse.json();
            console.log("🚀 ~ fetchSearchResults ~ secondData:", secondData);
            // Update the results that were in the state by adding the 'pictureArr' property to each item which will contain the images obtained in secondResponse.
            setResults((prevResults) => {
              console.log("🚀 ~ setResults ~ prevResults:", prevResults);
              return prevResults.map((result) => {
                const matchingItem = secondData.find(
                  (item: SecondDataItem) =>
                    item.code === 200 && item.body.id === result.id
                );

                if (matchingItem && matchingItem.body.pictures) {
                  return {
                    ...result,
                    picturesArr: matchingItem.body.pictures,
                  };
                }

                // No es necesario manejar el error aquí, ya que cada ResultCard muestra una imagen "no encontrada" si no se obtiene una de la API
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

    fetchSearchResults();
  }, [query]);

  let content;

  if (fetchError) {
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
    content = <MainResults results={results} />;
  }

  return (
    <Layout css={styles.container}>
      {loading && !fetchError && (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      )}
      {content}
    </Layout>
  );
};

export default SearchResults;
