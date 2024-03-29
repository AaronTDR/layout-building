/* Components */
import ResultCard from "../resultCard/ResultCard";

/* Styles */
import styles from "./mainResults.module.css";

/* Types */
import { MainResultsType } from "./MainResultsType";

const MainResults: React.FC<MainResultsType> = ({ results }) => {
  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {results.map((item) => (
          <ResultCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default MainResults;
