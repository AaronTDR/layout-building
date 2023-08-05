import {
  faLocationDot,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import LinkComponent from "../../../components/linkComponent/LinkComponent";
import Icon from "../../../components/icon/Icon";
import Button from "../../../components/button/Button";
import ShoppingCart from "../../../components/shoppingCart/ShoppingCart";
import Logo from "../../../components/logo/Logo";
import SearchBar from "../components/searchBar/SearchBar";
import Header from "../../../components/header/Header";
import Container from "../../../components/container/Container";

import borderLinkStyles from "../../../styles/borderLink.module.css";
import singleLineStyles from "../../../styles/singleLine.module.css";
import homeStyles from "./homeStyles.module.css";

const Home = () => {
  return (
    <div className={homeStyles.container}>
      <Container css={homeStyles.headerContainer}>
        <Header />
      </Container>
      <Container css={homeStyles.stickyContainer}>
        <Container css={homeStyles.stickyTopContainer}>
          <Logo />
          <Button cssArr={[homeStyles.stickyButtonAddress]}>
            <Icon icon={faLocationDot} css={homeStyles.stickyAddressIcon} />
            <span className={homeStyles.stickyAddressTextContainer}>
              <span
                className={`${homeStyles.stickyAddressTextTop} ${singleLineStyles.singleLine}`}
              >
                Deliver to
              </span>
              <span className="sticky__address-text--bottom single-line">
                Enter your address
              </span>
            </span>
          </Button>
          <SearchBar placeholder="Search anything...">
            <Icon
              icon={faMagnifyingGlass}
              css={homeStyles.stickySearchBarIcon}
            />
          </SearchBar>
          <Button cssArr={[homeStyles.wishListButton]}>
            <Icon icon={faHeart} css={homeStyles.stickyWishListIcon} />
            Wish List
          </Button>
          <ShoppingCart />
        </Container>
        <Container css={homeStyles.stickyBottomContainer}>
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
    </div>
  );
};

export default Home;
