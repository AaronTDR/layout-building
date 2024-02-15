/* Components */
import ResultCard from "../resultCard/ResultCard";

/* Styles */
import styles from "./mainResults.module.css";

const MainResults = ({ results }) => {
  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {results.map((result) => (
          <ResultCard key={result.id} item={result} />
        ))}
      </div>
    </main>
  );
};

export default MainResults;
