import {
  faLocationDot,
  faMagnifyingGlass,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
/* components */
import LinkComponent from "../../../components/linkComponent/LinkComponent";
import Icon from "../../../components/icon/Icon";
import Button from "../../../components/button/Button";
import MainHome from "../components/mainHome/MainHome";
import ShoppingCart from "../../../components/shoppingCart/ShoppingCart";
import Logo from "../../../components/logo/Logo";
import SearchBar from "../components/searchBar/SearchBar";
import Header from "../../../components/header/Header";
import Container from "../../../components/container/Container";
/* css */
import singleLineStyles from "../../../styles/singleLine.module.css";
import borderLinkStyles from "../../../styles/borderLink.module.css";
/* stylesHome */
import main from "../stylesHome/mainCardsContainer.module.css";
import sticky from "../stylesHome/sticky.module.css";
import headerContainer from "../stylesHome/headerContainer.module.css";
import container from "../stylesHome/container.module.css";

const Home = () => {
  return (
    <div className={container.container}>
      <Container css={headerContainer.headerContainer}>
        <Header />
      </Container>
      <Container css={sticky.stickyContainer}>
        <Container css={sticky.stickyTopContainer}>
          <Icon icon={faBars} css={sticky.stickyMenu} />
          <Logo />
          <Button cssArr={[sticky.stickyButtonAddress]}>
            <Icon icon={faLocationDot} css={sticky.stickyAddressIcon} />
            <span className={sticky.stickyAddressTextContainer}>
              <span
                className={`${sticky.stickyAddressTextTop} ${singleLineStyles.singleLine}`}
              >
                Deliver to
              </span>
              <span className="sticky__address-text--bottom single-line">
                Enter your address
              </span>
            </span>
          </Button>
          <SearchBar placeholder="Search anything...">
            <Icon icon={faMagnifyingGlass} css={sticky.stickySearchBarIcon} />
          </SearchBar>
          <Button cssArr={[sticky.stickyButtonWishList]}>
            <Icon icon={faHeart} css={sticky.stickyWishListIcon} />
            Wish List
          </Button>
          <ShoppingCart />
        </Container>
        <Container css={sticky.stickyBottomContainer}>
          <LinkComponent
            path={"#"}
            text="Vehicles"
            css={borderLinkStyles.borderLink}
          ></LinkComponent>
          <LinkComponent
            path={"#"}
            text="Supermarket"
            css={borderLinkStyles.borderLink}
          ></LinkComponent>
          <LinkComponent
            path={"#"}
            text="Technology"
            css={borderLinkStyles.borderLink}
          ></LinkComponent>
          <LinkComponent
            path={"#"}
            text="Home"
            css={borderLinkStyles.borderLink}
          ></LinkComponent>
          <LinkComponent
            path={"#"}
            text="Construction"
            css={borderLinkStyles.borderLink}
          ></LinkComponent>
          <LinkComponent
            path={"#"}
            text="Fashion"
            css={borderLinkStyles.borderLink}
          ></LinkComponent>
          <LinkComponent
            path={"#"}
            text="Sports"
            css={borderLinkStyles.borderLink}
          ></LinkComponent>
        </Container>
      </Container>
      <MainHome css={main.cardsContainer} />
    </div>
  );
};

export default Home;
