import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true); // Agrega un estado de carga
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
          console.log(
            "🚀 ~ file: SearchResults.tsx:22 ~ fetchSearchResults ~ data:",
            data
          );
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
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Resultados de búsqueda para "{query}"</h2>
      {/* Renderizar los resultados */}
    </div>
  );
};

export default SearchResults;
