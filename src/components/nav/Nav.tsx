import { Link } from "react-router-dom";
import {
  faMobileScreenButton,
  faGlobe,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

/* styles */
import navStyles from "./nav.module.css";
import borderLinkStyles from "../../styles/borderLink.module.css";

/* components */
import Icon from "../../components/icon/Icon";
import ThemeButton from "../../components/themeButton/ThemeButton";
import List from "../list/List";
import SocialMedia from "../socialMedia/SocialMedia";

const Nav = () => {
  /* Contains the elements to render in the right section of the navigation */
  const cssRightSectionElements = `${borderLinkStyles.borderLink} ${navStyles.headerNavbarLink}`;
  const rightSectionElements = [
    {
      path: "#",
      text: "Language",
      cssLink: cssRightSectionElements,
      icon: {
        name: faGlobe,
        css: navStyles.headerIcon,
      },
    },
    {
      path: "#",
      text: "Help",
      cssLink: cssRightSectionElements,
      icon: {
        name: faQuestion,
        css: navStyles.headerIcon,
      },
    },
    {
      path: "#",
      text: "Sing Up",
      cssLink: cssRightSectionElements,
    },
    {
      path: "#",
      text: "Log in",
      cssLink: cssRightSectionElements,
    },
  ];
  return (
    <div className={navStyles.headerNavbar}>
      <div className={navStyles.headerSection}>
        <Link
          to="#"
          className={`
            ${borderLinkStyles.borderLink} ${navStyles.headerNavbarLink}
          `}
        >
          <Icon icon={faMobileScreenButton} css={navStyles.headerIcon} />
          {"App"}
        </Link>
        <SocialMedia
          text="Fallow us on:"
          textCss={navStyles.headerFollowUsText}
          containerCss={navStyles.headerSocialMediaContainer}
          iconCss={navStyles.socialMediaIconStyles}
        />
      </div>{" "}
      <div className={navStyles.headerSection}>
        <ThemeButton
          cssButton={`${borderLinkStyles.borderLink} ${navStyles.themeButton}`}
          cssIcon={navStyles.themeIcon}
        />
        <List
          ulTagCss={navStyles.headerNavBarOptions}
          liTagCss={navStyles.headerSection}
          elements={rightSectionElements}
        />
      </div>
    </div>
  );
};
export default Nav;
