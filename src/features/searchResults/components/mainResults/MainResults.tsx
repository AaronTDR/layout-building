import React, { useState, useEffect } from "react";

/* Components */
import Pagination from "../../../../components/pagination/Pagination";
import ResultCard from "../resultCard/ResultCard";

/* Styles */
import styles from "./mainResults.module.css";

/* Types */
import { MainResultsType } from "./MainResultsType";

const MainResults: React.FC<MainResultsType> = ({
  results,
  pagination,
  totalItems,
  itemsPerPage,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Determines the number of pages to display in the pagination
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let pagesToShow;
  if (windowWidth < 435) {
    pagesToShow = 1;
  } else if (windowWidth < 512) {
    pagesToShow = 3;
  } else {
    pagesToShow = 5;
  }
  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {results?.map((item) => (
          <ResultCard key={item.id} item={item} />
        ))}
      </div>
      {pagination && (
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          maxPagesToShow={pagesToShow}
        />
      )}
    </main>
  );
};

export default MainResults;
