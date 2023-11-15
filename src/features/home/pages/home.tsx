import { useContext } from "react";

/* components */
import MainHome from "../components/mainHome/MainHome";
import StickyBar from "../../../components/stickyBar/StickyBar";
import Header from "../../../components/header/Header";

/* context theme */
import { ThemeContext } from "../../../contexts/ThemeProvider";

/* styles */
import Footer from "../../../components/footer/Footer";
import main from "../stylesHome/mainCardsContainer.module.css";
import Carousel from "../../home/components/carousel/Carousel";
import container from "../stylesHome/container.module.css";
import headerContainer from "../stylesHome/headerContainer.module.css";

/* theme styles */
import headerContainerTheme from "../stylesHome/headerContainerTheme.module.css";

/* utils  */
import { getThemeClasses } from "../../../utils/getThemeClasses/getThemeClasses";

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const headerContainerWithTheme = {
    theme: getThemeClasses(isDarkMode, headerContainerTheme),
  };
  return (
    <div className={container.container}>
      <div
        className={`${headerContainerWithTheme.theme} ${headerContainer.headerContainer}`}
      >
        <Header />
      </div>
      <StickyBar />
      <Carousel />
      <MainHome css={main.cardsContainer} />
      <Footer />
    </div>
  );
};

export default Home;
