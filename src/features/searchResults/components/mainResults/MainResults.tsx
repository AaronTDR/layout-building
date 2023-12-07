/* Styles */
import styles from "./mainResults.module.css";

const MainResults = ({ results }) => {
  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {results.map((result) => (
          <div key={result.id} className={styles.resultItem}>
            <p>{result.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainResults;
