import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/* Components */
import MainResults from "../../searchResults/components/mainResults/MainResults";
import Layout from "../../../components/layout/Layout";

import {
  faFaceSadTear,
  faMagnifyingGlassMinus,
} from "@fortawesome/free-solid-svg-icons";

/* Components */
import Message from "../../../components/message/Message";
import Categories from "../components/categories/Categories";

/* Styles */
import styles from "./domain.module.css";

/* Utils */
import { getDomains } from "../utils/getDomains";

const Domain = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(0);
  const [offset, setOffset] = useState(0);
  // const [categoriesLength, setCategoriesLength] = useState(0);
  const [results, setResults] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const { name } = useParams();
  const [nameState, setNameState] = useState(name);

  const domains = getDomains();

  const limit = 20;

  const domain = domains.find(
    (d) => d.name.toLowerCase() === name?.toLowerCase()
  );

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight;
      console.log("🚀 ~ onScroll ~ scrolledToBottom:", scrolledToBottom);
      setIsAtBottom(scrolledToBottom);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (domain) {
      if (isFirstRender) {
        setIsFirstRender(false);
      } else {
        if (name !== nameState) {
          console.log("name changed!", name);

          setNameState(name);
          setResults([]);
          setCurrentCategory(0);
          setOffset(0);

          // Llama a fetchResults aquí
          fetchResults(domain.categories[0]?.id, 0);
        } else if (currentCategory + 1 === domain.categories.length) {
          setOffset((prevOffset) => prevOffset + limit);
          setCurrentCategory(0);
        } else {
          console.log(
            "Fourth effect at condition-> domain exists and name === nameState)"
          );

          setCurrentCategory((currentCategory) => currentCategory + 1);
        }
      }
    }
  }, [isAtBottom, name]);

  useEffect(() => {
    console.log("new request");
    if (domain) {
      fetchResults(domain.categories[currentCategory]?.id, offset);
    }
  }, [currentCategory, offset]);

  const fetchResults = async (categoryId: string, offset: number) => {
    console.log("🚀 ~ fetchResults ~ offset:", offset);
    try {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLM/search?category=${categoryId}&status=active&offset=${offset}&limit=${limit}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const items = data.results;

      setResults((prevResults) => {
        const newResults = items.filter(
          (result) => !prevResults.find((prev) => prev.id === result.id)
        );
        return [...prevResults, ...newResults];
      });
    } catch (error) {
      console.error("Error fetching results:", error);
      setError("Error fetching results");
    }
  };

  if (error) {
    return (
      <Message
        icon={faFaceSadTear}
        title="Something went wrong"
        message={error}
      />
    );
  }

  if (!domain) {
    return (
      <Message
        icon={faMagnifyingGlassMinus}
        title="Domain not found"
        message="Oops! It seems that the domain you're trying to access is not available."
      />
    );
  }

  return (
    <Layout css={styles.container}>
      <main className={styles.content}>
        <Categories domain={domain} />
      </main>
      {/* <MainResults results={results} /> */}
      {console.log(
        "Category: ",
        domain?.categories[currentCategory]?.name,
        "\n\n",
        "ID: ",
        domain?.categories[currentCategory]?.id,
        "\n\n",
        "offset: ",
        offset,
        "\n\n",
        "current: ",
        currentCategory,
        "\n\n",
        "Results: "
      )}
      {/* {results} */ console.log(results)}
    </Layout>
  );
};

export default Domain;
