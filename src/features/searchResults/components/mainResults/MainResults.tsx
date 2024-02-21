/* Components */
import ResultCard from "../resultCard/ResultCard";

/* Styles */
import styles from "./mainResults.module.css";

type Picture = { id: string; url: string };

type PicturesArr = Picture[];

type Item = {
  id: string;
  title: string;
  original_price: number | null;
  price: number;
  official_store_name: string;
  shipping: { free_shipping: string | null };
  picturesArr?: PicturesArr;
};

type MainResultsProps = {
  results: Item[];
};

const MainResults: React.FC<MainResultsProps> = ({ results }) => {
  console.log("🚀 ~ file: MainResults.tsx:5 ~ MainResults ~ results:", results);

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
