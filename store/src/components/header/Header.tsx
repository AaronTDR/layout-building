import {
  faMobileScreenButton,
  faGlobe,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
/* components */
import Icon from "../icon/Icon";
import LinkComponent from "../linkComponent/LinkComponent";
import SocialMedia from "../socialMedia/SocialMedia";
import List from "../list/List";
import Container from "../container/Container";
import Nav from "../nav/Nav";
/* css */
import borderLinkStyles from "../../styles/borderLink.module.css";
import headerSection from "../../features/home/stylesHome/headerSection.module.css";
import headerStyles from "./headerStyles.module.css";

const listRightSection = [
  {
    listElement: (
      <LinkComponent
        path="#"
        text={"Language"}
        css={`
          ${borderLinkStyles.borderLink} ${headerStyles.headerNavbarLink}
        `}
      >
        <Icon icon={faGlobe} css={headerStyles.headerIcon} />
      </LinkComponent>
    ),
  },
  {
    listElement: (
      <LinkComponent
        path="#"
        text={"Help"}
        css={`
          ${borderLinkStyles.borderLink} ${headerStyles.headerNavbarLink}
        `}
      >
        <Icon icon={faQuestion} css={headerStyles.headerIcon} />
      </LinkComponent>
    ),
  },
  {
    listElement: (
      <LinkComponent
        path="#"
        text={"Sing Up"}
        css={`
          ${borderLinkStyles.borderLink} ${headerStyles.headerNavbarLink}
        `}
      ></LinkComponent>
    ),
  },
  {
    listElement: (
      <LinkComponent
        path="#"
        text={"Log in"}
        css={`
          ${borderLinkStyles.borderLink} ${headerStyles.headerNavbarLink}
        `}
      ></LinkComponent>
    ),
  },
];

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Nav>
        <Container css={headerSection.headerSection}>
          <LinkComponent
            path="#"
            text="App"
            css={`
              ${borderLinkStyles.borderLink} ${headerStyles.headerNavbarLink}
            `}
          >
            <Icon icon={faMobileScreenButton} css={headerStyles.headerIcon} />
          </LinkComponent>
          <SocialMedia
            text="Fallow us on:"
            textCss={headerStyles.headerFollowUsText}
            containerCss={headerStyles.headerSocialMediaContainer}
            iconCss={headerStyles.socialMediaIconStyles}
          />
        </Container>{" "}
        <Container css={headerSection.headerSection}>
          <List
            css={headerStyles.headerNavBarOptions}
            elements={listRightSection}
          />
        </Container>
      </Nav>
    </header>
  );
};

export default Header;
