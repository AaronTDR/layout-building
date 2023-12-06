import { useState, useContext } from "react";
import {
  faLocationDot,
  faMagnifyingGlass,
  faHeart,
  faBars,
  faHome,
  faTag,
  faTshirt,
  faGlobe,
  faQuestion,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

/* components */
import Icon from "../icon/Icon";
import ThemeButton from "../../components/themeButton/ThemeButton";
import AccordionItem from "../accordion/AccordionItem";
import Accordion from "../accordion/Accordion";
import UserProfileDropdown from "../userProfileDropdown/UserProfileDropdown";
import DropdownMenu from "../../components/dropdownMenu/DropdownMenu";
import Logo from "../logo/Logo";
import HeaderButton from "../headerButton/HeaderButton";
import List from "../list/List";
import ShoppingCart from "../../components/shoppingCart/ShoppingCart";
import SearchBar from "../../features/home/components/searchBar/SearchBar";

/* theme context */
import { ThemeContext } from "../../contexts/ThemeProvider";

/* styles */
import borderLinkStyles from "../../styles/borderLink.module.css";
import singleLineStyles from "../../styles/singleLine.module.css";
import stickyBar from "./stickyBar.module.css";

/* theme styles */
import ThemeButtonTheme from "./theme/themeButtonTheme.module.css";
import userProfileContainerTheme from "./theme/userProfileContainerTheme.module.css";
import accordionItemContentContainerTheme from "./theme/accordionItemContentContainerTheme.module.css";
import accordionItemLinkTheme from "./theme/accordionItemLinkTheme.module.css";
import accordionItemIconTheme from "./theme/accordionItemIconTheme.module.css";
import dropdownMenuContainerTheme from "./theme/dropdownMenuContainerTheme.module.css";
import menuLinkTheme from "./theme/menuLinkTheme.module.css";
import StickyBarContainerTheme from "./theme/StickyBarContainerTheme.module.css";

/* utils */
import { getThemeClasses } from "../../utils/getThemeClasses/getThemeClasses";

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
  /* DropdownMenu state */
  const [isOpen, setIsOpen] = useState(false);

  // Get the theme context
  const themeContext = useContext(ThemeContext);
  const { isDarkMode } = themeContext || {
    isDarkMode: false,
  };

  // Get class based on current theme
  const profileContainerTheme = {
    theme: getThemeClasses(isDarkMode, userProfileContainerTheme),
  };

  const themeButton = {
    theme: getThemeClasses(isDarkMode, ThemeButtonTheme),
  };

  const accordionContainerTheme = {
    theme: getThemeClasses(isDarkMode, accordionItemContentContainerTheme),
  };

  const accordionLinkTheme = {
    theme: getThemeClasses(isDarkMode, accordionItemLinkTheme),
  };

  const accordionIconTheme = {
    theme: getThemeClasses(isDarkMode, accordionItemIconTheme),
  };

  const dropdownMenuTheme = {
    theme: getThemeClasses(isDarkMode, dropdownMenuContainerTheme),
  };

  const selectedMenuLinkTheme = {
    theme: getThemeClasses(isDarkMode, menuLinkTheme),
  };

  const containerTheme = {
    theme: getThemeClasses(isDarkMode, StickyBarContainerTheme),
  };

  const dropdownMenuPrincipalList = [
    {
      path: "/",
      text: "Home",
      cssLink: `${selectedMenuLinkTheme.theme} ${stickyBar.menuLink}`,
      icon: { name: faHome, css: stickyBar.menuOptionIcon },
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Wish List",
      cssLink: `${selectedMenuLinkTheme.theme} ${stickyBar.menuLink}`,
      icon: { name: faHeart, css: stickyBar.menuOptionIcon },
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Offers",
      cssLink: `${selectedMenuLinkTheme.theme} ${stickyBar.menuLink}`,
      icon: { name: faTag, css: stickyBar.menuOptionIcon },
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Trends",
      cssLink: `${selectedMenuLinkTheme.theme} ${stickyBar.menuLink}`,
      icon: { name: faTshirt, css: stickyBar.menuOptionIcon },
      onClick: () => setIsOpen(!isOpen),
    },
  ];
  const dropdownMenuSettingsList = [
    {
      path: "#",
      text: "Language",
      cssLink: `${selectedMenuLinkTheme.theme} ${stickyBar.menuLink}`,
      icon: { name: faGlobe, css: stickyBar.menuOptionIcon },
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Help",
      cssLink: `${selectedMenuLinkTheme.theme} ${stickyBar.menuLink}`,
      icon: { name: faQuestion, css: stickyBar.menuOptionIcon },
      onClick: () => setIsOpen(!isOpen),
    },
  ];
  const categoriesElementsDropDownMenu = [
    {
      path: "#",
      text: "Vehicles",
      cssLink: `${accordionLinkTheme.theme} ${stickyBar.accordionItemListLink}`,
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Supermarket",
      cssLink: `${accordionLinkTheme.theme} ${stickyBar.accordionItemListLink}`,
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Technology",
      cssLink: `${accordionLinkTheme.theme} ${stickyBar.accordionItemListLink}`,
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Home",
      cssLink: `${accordionLinkTheme.theme} ${stickyBar.accordionItemListLink}`,
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Construction",
      cssLink: `${accordionLinkTheme.theme} ${stickyBar.accordionItemListLink}`,
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Fashion",
      cssLink: `${accordionLinkTheme.theme} ${stickyBar.accordionItemListLink}`,
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Sports",
      cssLink: `${accordionLinkTheme.theme} ${stickyBar.accordionItemListLink}`,
      onClick: () => setIsOpen(!isOpen),
    },
  ];
  return (
    <div className={`${containerTheme.theme} ${stickyBar.stickyContainer}`}>
      <div className={stickyBar.stickyTopContainer}>
        <div className={stickyBar.iconMenuContainer}>
          {/* The 'stickyBar.separationLine' class adds a horizontal  line to Separate blocks in Dropdown Menu*/}
          <DropdownMenu
            icon={faBars}
            iconCss={stickyBar.iconMenu}
            menuContainerCss={`${dropdownMenuTheme.theme} ${stickyBar.menuContainer}`}
            dropdownPosition={"left"}
            menuWidthPercentage={80}
            state={isOpen}
            setState={setIsOpen}
          >
            <header>
              <UserProfileDropdown
                containerCssProp={profileContainerTheme.theme}
                onCLick={() => setIsOpen(!isOpen)}
                isThereBanner={true}
              />
            </header>
            <List
              ulTagCss={`${stickyBar.menuUl} ${stickyBar.separationLine}`}
              liTagCss={stickyBar.menuLi}
              elements={dropdownMenuPrincipalList}
            />
            <List
              ulTagCss={`${stickyBar.menuUl} ${stickyBar.separationLine}`}
              liTagCss={stickyBar.menuLi}
              elements={dropdownMenuSettingsList}
            />
            <Accordion
              cssAccordionContainer={`${stickyBar.separationLine} ${stickyBar.accordionContainer}`}
            >
              <AccordionItem
                title={"Categories"}
                cssTitle={stickyBar.accordionItemTitle}
                icon={faChevronDown}
                cssIcon={`${accordionIconTheme.theme} ${stickyBar.accordionItemIcon}`}
                rotateIcon={true}
                IsThereOpacityIcon={true}
                cssContentContainer={`${accordionContainerTheme.theme} ${stickyBar.accordionItemContentContainer}`}
                expandDirection={"up"}
              >
                <List
                  ulTagCss={stickyBar.menuUl}
                  liTagCss={stickyBar.accordionItemList}
                  elements={categoriesElementsDropDownMenu}
                />
              </AccordionItem>
              <AccordionItem
                title={"Services"}
                cssTitle={stickyBar.accordionItemTitle}
                icon={faChevronDown}
                cssIcon={`${accordionIconTheme.theme} ${stickyBar.accordionItemIcon}`}
                rotateIcon={true}
                IsThereOpacityIcon={true}
                cssContentContainer={`${accordionContainerTheme.theme} ${stickyBar.accordionItemContentContainer}`}
                expandDirection={"up"}
              >
                {/* API content will be added...*/}
              </AccordionItem>
            </Accordion>
            <ThemeButton
              cssButton={`${themeButton.theme} ${stickyBar.themeButton}`}
              cssIcon={stickyBar.menuOptionIcon}
              text={isDarkMode ? "Light mode" : "Dark mode"}
            />
          </DropdownMenu>
        </div>
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
            <span
              className={`${stickyBar.stickyAddressTextBottom} ${singleLineStyles.singleLine}`}
            >
              Enter your address
            </span>
          </span>
        </HeaderButton>
        <SearchBar
          placeholder="Search"
          cssButton={stickyBar.stickySearchBarButton}
          icon={faMagnifyingGlass}
          cssIcon={stickyBar.stickySearchBarIcon}
        />
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
