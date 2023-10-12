import { useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
/* components */
import Icon from "../icon/Icon";
import AccordionItem from "../accordion/AccordionItem";
import Accordion from "../accordion/Accordion";
import DropdownMenu from "../../components/dropdownMenu/DropdownMenu";
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
  /* DropdownMenu state */
  const [isOpen, setIsOpen] = useState(false);

  const dropdownMenuPrincipalList = [
    {
      path: "#",
      text: "Home",
      cssLink: stickyBar.menuLink,
      icon: { name: faHome, css: stickyBar.menuOptionIcon },
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Wish List",
      cssLink: stickyBar.menuLink,
      icon: { name: faHeart, css: stickyBar.menuOptionIcon },
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Offers",
      cssLink: stickyBar.menuLink,
      icon: { name: faTag, css: stickyBar.menuOptionIcon },
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Trends",
      cssLink: stickyBar.menuLink,
      icon: { name: faTshirt, css: stickyBar.menuOptionIcon },
      onClick: () => setIsOpen(!isOpen),
    },
  ];
  const dropdownMenuSettingsList = [
    {
      path: "#",
      text: "Language",
      cssLink: stickyBar.menuLink,
      icon: { name: faGlobe, css: stickyBar.menuOptionIcon },
      onClick: () => setIsOpen(!isOpen),
    },
    {
      path: "#",
      text: "Help",
      cssLink: stickyBar.menuLink,
      icon: { name: faQuestion, css: stickyBar.menuOptionIcon },
      onClick: () => setIsOpen(!isOpen),
    },
  ];
  return (
    <div className={stickyBar.stickyContainer}>
      <div className={stickyBar.stickyTopContainer}>
        <div className={stickyBar.iconMenuContainer}>
          <DropdownMenu
            icon={faBars}
            iconCss={stickyBar.iconMenu}
            dropdownPosition={"left"}
            menuWidthPercentage={80}
            state={isOpen}
            setState={setIsOpen}
          >
            <List
              ulTagCss={stickyBar.menuUl}
              liTagCss={stickyBar.menuLi}
              elements={dropdownMenuPrincipalList}
            />
            <List
              ulTagCss={stickyBar.menuUl}
              liTagCss={stickyBar.menuLi}
              elements={dropdownMenuSettingsList}
            />
            <Accordion cssAccordionContainer={stickyBar.accordionContainer}>
              <AccordionItem
                title={"Item - 1"}
                cssTitle={stickyBar.accordionItemTitle}
                cssContent={stickyBar.accordionItemContent}
              >
                <List
                  ulTagCss={stickyBar.menuUl}
                  liTagCss={stickyBar.menuLi}
                  elements={dropdownMenuSettingsList}
                />
              </AccordionItem>
              <AccordionItem
                title={"Item - 2"}
                cssTitle={stickyBar.accordionItemTitle}
                cssContent={stickyBar.accordionItemContent}
              >
                <List
                  ulTagCss={stickyBar.menuUl}
                  liTagCss={stickyBar.menuLi}
                  elements={dropdownMenuPrincipalList}
                />
              </AccordionItem>
            </Accordion>
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
