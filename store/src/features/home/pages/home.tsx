/* components */
import MainHome from "../components/mainHome/MainHome";
import StickyBar from "../../../components/stickyBar/StickyBar";
import Header from "../../../components/header/Header";
/* stylesHome */
import Footer from "../../../components/footer/Footer";
import main from "../stylesHome/mainCardsContainer.module.css";
import headerContainer from "../stylesHome/headerContainer.module.css";
import container from "../stylesHome/container.module.css";

const Home = () => {
  return (
    <div className={container.container}>
      <div className={headerContainer.headerContainer}>
        <Header />
      </div>
      <StickyBar />
      <MainHome css={main.cardsContainer} />
      <Footer />
    </div>
  );
};

export default Home;
