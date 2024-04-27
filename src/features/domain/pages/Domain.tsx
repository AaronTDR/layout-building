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

/* Types */
import { Item } from "../../../types/ResultAPIType";

/* Utils */
import { useDebounce } from "../../../hooks/useDebounce/useDebounce";
import { getDomains } from "../utils/getDomains";

const Domain = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [offset, setOffset] = useState(0);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  const [results, setResults] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const { name } = useParams();
  const [nameState, setNameState] = useState(name);

  const domains = getDomains();

  const limit = 20;

  const domain = domains.find(
    (d) => d.name.toLowerCase() === name?.toLowerCase()
  );

  const scrolledToBottomDebounced = useDebounce(scrolledToBottom, 300);

  // Add scroll event
  useEffect(() => {
    const onScroll = () => {
      const scrolled =
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight;
      setScrolledToBottom(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(
    () => setIsAtBottom(scrolledToBottomDebounced),
    [scrolledToBottom, scrolledToBottomDebounced]
  );

  useEffect(() => {
    if (domain) {
      // If it is the first render, execution is canceled so as not to make a double request together with the third effect
      if (isFirstRender) {
        setIsFirstRender(false);
      } else {
        // Make a new request if you change domain
        if (name !== nameState) {
          setNameState(name);
          setResults([]);
          setCurrentCategory(0);
          setOffset(0);

          fetchResults(domain.categories[0]?.id, 0);
        } else if (currentCategory + 1 === domain.categories.length) {
          // Increase offset if results were shown for each category
          setOffset((prevOffset) => prevOffset + limit);
          setCurrentCategory(0);
        } else {
          // Increase currentCategory to show next category
          setCurrentCategory((currentCategory) => currentCategory + 1);
        }
      }
    }
  }, [isAtBottom, name]);

  useEffect(() => {
    if (domain) {
      fetchResults(domain.categories[currentCategory]?.id, offset);
    }
  }, [currentCategory, offset]);

  const fetchResults = async (categoryId: string, offset: number) => {
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
          (result: item) => !prevResults.find((prev) => prev.id === result.id)
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
