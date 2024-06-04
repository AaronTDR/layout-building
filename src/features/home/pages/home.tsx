import { useEffect } from "react";

/* components */
import AdCarousel from "../components/carousel/AdCarousel";
import MainHome from "../components/mainHome/MainHome";
import Layout from "../../../components/layout/Layout";

/* styles */
import styles from "../stylesHome/container.module.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout css={styles.container}>
      <AdCarousel />
      <MainHome />
    </Layout>
  );
};

export default Home;
