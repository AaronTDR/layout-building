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
import HeaderSection from "../headerSection/HeaderSection";
import Nav from "../nav/Nav";
/* css */
import borderLinkStyles from "../../styles/borderLink.module.css";
import headerStyles from "./headerStyles.module.css";

const socialMediaIcons = [
  {
    iconComponent: (
      <Icon icon={faInstagram} css={headerStyles.socialMediaIconStyles} />
    ),
  },
  {
    iconComponent: (
      <Icon icon={faTwitter} css={headerStyles.socialMediaIconStyles} />
    ),
  },
  {
    iconComponent: (
      <Icon icon={faFacebook} css={headerStyles.socialMediaIconStyles} />
    ),
  },
  {
    iconComponent: (
      <Icon icon={faWhatsapp} css={headerStyles.socialMediaIconStyles} />
    ),
  },
];

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
    <div className={headerStyles.header}>
      <Nav>
        <HeaderSection>
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
            iconsArr={socialMediaIcons}
            socialMediaContainerCss={headerStyles.headerSocialMediaContainer}
          />
        </HeaderSection>{" "}
        <HeaderSection>
          <List
            css={headerStyles.headerNavBarOptions}
            elements={listRightSection}
          />
        </HeaderSection>
      </Nav>
    </div>
  );
};

export default Header;
