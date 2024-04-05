/* Components */
import Pagination from "../../../../components/pagination/Pagination";
import ResultCard from "../resultCard/ResultCard";

/* Styles */
import styles from "./mainResults.module.css";

/* Types */
import { MainResultsType } from "./MainResultsType";

const MainResults: React.FC<MainResultsType> = ({
  results,
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  setOffset,
}) => {
  const handlePageChange = (newPage) => {
    // Get current page elements
    const startIndex = (newPage - 1) * itemsPerPage; // offset
    //const endIndex = startIndex + itemsPerPage; // limit
    setCurrentPage(newPage);
    setOffset(startIndex);
  };
  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {results?.map((item) => (
          <ResultCard key={item.id} item={item} />
        ))}
      </div>

      <Pagination
        totalItems={totalItems}
        itemsPerPage={20}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        maxPagesToShow={5}
      />
    </main>
  );
};

export default MainResults;
