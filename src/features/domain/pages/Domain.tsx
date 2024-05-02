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
import Loading from "../../../components/loading/Loading";
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
  const [loading, setLoading] = useState(true);
  //  Shown with infinite scroll
  const [loadingMore, setLoadingMore] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(0);
  const [offset, setOffset] = useState(0);

  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  const [results, setResults] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [isFirstRender, setIsFirstRender] = useState(true);

  const { name } = useParams();
  const [nameState, setNameState] = useState(name);

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const domains = getDomains();

  const limit = 20;

  const domain = domains.find(
    (d) => d.name.toLowerCase() === name?.toLowerCase()
  );

  const scrolledToBottomDebounced = useDebounce(scrolledToBottom, 200);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      const scrollOffset = 500;
      const scrolled =
        window.innerHeight + scrollPos >=
        document.documentElement.offsetHeight - (footerHeight + scrollOffset);

      // Determine scroll direction
      const direction = scrollPos > prevScrollPos ? "down" : "up";

      setScrolledToBottom(scrolled && direction === "down");
      setPrevScrollPos(scrollPos);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [footerHeight, prevScrollPos]);

  useEffect(() => {
    // Get the footer element
    const footer = document.querySelector("footer");

    // Get the height of the footer
    const height = footer?.offsetHeight;

    // Update the state with the height of the footer
    height && setFooterHeight(height);
  }, []);

  useEffect(() => {
    if (domain) {
      // If it is the first render, execution is canceled so as not to make a double request together with the third effect
      if (isFirstRender) {
        setIsFirstRender(false);
      } else {
        // Make a new request if domain changes
        if (name !== nameState) {
          setNameState(name);
          setResults([]);
          setCurrentCategory(0);
          setOffset(0);
          window.scrollTo(0, 0);

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
  }, [name, scrolledToBottomDebounced]);

  useEffect(() => {
    if (domain) {
      fetchResults(domain.categories[currentCategory]?.id, offset);
    }
  }, [currentCategory, offset]);

  const fetchResults = async (categoryId: string, offset: number) => {
    try {
      // If offset is 0 then it's loading results for the first time
      if (offset === 0) {
        setLoading(true);
      } else {
        // If offset is not 0 it's loading more results
        setLoadingMore(true);
      }
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
          (result: Item) => !prevResults.find((prev) => prev.id === result.id)
        );
        return [...prevResults, ...newResults];
      });
    } catch (error) {
      console.error("Error fetching results:", error);
      setError("Error fetching results");
    } finally {
      // Deactivates the corresponding charging states
      if (offset === 0) {
        setLoading(false);
      } else {
        setLoadingMore(false);
      }
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
      <div className={styles.content}>
        <Categories domain={domain} />
      </div>
      {loading && !error && (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      )}
      <MainResults results={results} pagination={"false"} />
      {loadingMore && !loading && !error && (
        <div className={styles.loadingMoreContainer}>
          <Loading />
        </div>
      )}
    </Layout>
  );
};

export default Domain;
