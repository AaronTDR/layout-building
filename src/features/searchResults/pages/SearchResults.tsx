import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/* Components */
import MainResults from "../components/mainResults/MainResults";
import Layout from "../../../components/layout/Layout";

/* Styles */
import styles from "./searchResults.module.css";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        if (query) {
          const response = await fetch(
            `https://api.mercadolibre.com/sites/MLM/search?q=${encodeURIComponent(
              query
            )}&status=active&app_version=v2&condition=new`
          );
          const data = await response.json();
          setResults(data.results);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout css={styles.container}>
      <h2>Results from "{query}"</h2>
      <MainResults results={results} />
    </Layout>
  );
};

export default SearchResults;
