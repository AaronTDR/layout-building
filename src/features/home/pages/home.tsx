/* components */
import Carousel from "../../home/components/carousel/Carousel";
import MainHome from "../components/mainHome/MainHome";
import Layout from "../../../components/layout/Layout";

/* styles */
import container from "../stylesHome/container.module.css";

const Home = () => {
  return (
    <Layout css={container.container}>
      <Carousel />
      <MainHome />
    </Layout>
  );
};

export default Home;
