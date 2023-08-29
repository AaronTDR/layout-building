import {
  faLocationDot,
  faMagnifyingGlass,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
/* components */
import Icon from "../icon/Icon";
import Logo from "../logo/Logo";
import HeaderButton from "../headerButton/HeaderButton";
import List from "../list/List";
import ShoppingCart from "../../components/shoppingCart/ShoppingCart";
import SearchBar from "../../features/home/components/searchBar/SearchBar";
/* styles */
import borderLinkStyles from "../../styles/borderLink.module.css";
import singleLineStyles from "../../styles/singleLine.module.css";
import stickyBar from "./stickyBar.module.css";

const categoriesElements = [
  {
    path: "#",
    text: "Vehicles",
    cssLink: borderLinkStyles.borderLink,
  },
  {
    path: "#",
    text: "Supermarket",
    cssLink: borderLinkStyles.borderLink,
  },
  {
    path: "#",
    text: "Technology",
    cssLink: borderLinkStyles.borderLink,
  },
  {
    path: "#",
    text: "Home",
    cssLink: borderLinkStyles.borderLink,
  },
  {
    path: "#",
    text: "Construction",
    cssLink: borderLinkStyles.borderLink,
  },
  {
    path: "#",
    text: "Fashion",
    cssLink: borderLinkStyles.borderLink,
  },
  {
    path: "#",
    text: "Sports",
    cssLink: borderLinkStyles.borderLink,
  },
];

const StickyBar = () => {
  return (
    <div className={stickyBar.stickyContainer}>
      <div className={stickyBar.stickyTopContainer}>
        <Icon icon={faBars} css={stickyBar.stickyMenu} />
        <Logo
          logoContainerCss={stickyBar.stickyLogoContainer}
          logoImgCss={stickyBar.stickyLogoImg}
          logoTextCss={stickyBar.stickyLogoText}
        />
        <HeaderButton cssArr={[stickyBar.stickyButtonAddress]}>
          <Icon icon={faLocationDot} css={stickyBar.stickyAddressIcon} />
          <span className={stickyBar.stickyAddressTextContainer}>
            <span
              className={`${stickyBar.stickyAddressTextTop} ${singleLineStyles.singleLine}`}
            >
              Deliver to
            </span>
            <span className="sticky__address-text--bottom single-line">
              Enter your address
            </span>
          </span>
        </HeaderButton>
        <SearchBar placeholder="Search">
          <Icon icon={faMagnifyingGlass} css={stickyBar.stickySearchBarIcon} />
        </SearchBar>
        <HeaderButton cssArr={[stickyBar.stickyButtonWishList]}>
          <Icon icon={faHeart} css={stickyBar.stickyWishListIcon} />
          Wish List
        </HeaderButton>
        <ShoppingCart />
      </div>
      <div className={stickyBar.stickyBottomContainer}>
        <List ulTagCss={stickyBar.stickyList} elements={categoriesElements} />
      </div>
    </div>
  );
};

export default StickyBar;
