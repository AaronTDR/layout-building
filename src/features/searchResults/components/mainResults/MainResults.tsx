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
}) => {
  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {results?.map((item) => (
          <ResultCard key={item.id} item={item} />
        ))}
      </div>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        maxPagesToShow={5}
      />
    </main>
  );
};

export default MainResults;
