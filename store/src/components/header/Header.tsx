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
import headerListStyles from "../../styles/headerNavbarOptions.module.css";
import socialMediaIconStyles from "../../styles/socialMediaIcon.module.css";
import headerIconStyles from "../../styles/headerIcon.module.css";
import borderLinkStyles from "../../styles/borderLink.module.css";
import headerFallowUsTextStyles from "../../styles/headerFallowUsText.module.css";
import HeaderStyles from "./header.module.css";

const socialMediaIcons = [
  {
    iconComponent: <Icon icon={faInstagram} css={socialMediaIconStyles.icon} />,
  },
  {
    iconComponent: <Icon icon={faTwitter} css={socialMediaIconStyles.icon} />,
  },
  {
    iconComponent: <Icon icon={faFacebook} css={socialMediaIconStyles.icon} />,
  },
  {
    iconComponent: <Icon icon={faWhatsapp} css={socialMediaIconStyles.icon} />,
  },
];

const listRightSection = [
  {
    listElement: (
      <LinkComponent
        path="#"
        text={"Language"}
        css={`
          ${borderLinkStyles.borderLink} ${borderLinkStyles.headerNavbarLink}
        `}
      >
        <Icon icon={faGlobe} css={headerIconStyles.icon} />
      </LinkComponent>
    ),
  },
  {
    listElement: (
      <LinkComponent
        path="#"
        text={"Help"}
        css={`
          ${borderLinkStyles.borderLink} ${borderLinkStyles.headerNavbarLink}
        `}
      >
        <Icon icon={faQuestion} css={headerIconStyles.icon} />
      </LinkComponent>
    ),
  },
  {
    listElement: (
      <LinkComponent
        path="#"
        text={"Sing Up"}
        css={`
          ${borderLinkStyles.borderLink} ${borderLinkStyles.headerNavbarLink}
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
          ${borderLinkStyles.borderLink} ${borderLinkStyles.headerNavbarLink}
        `}
      ></LinkComponent>
    ),
  },
];

const Header = () => {
  return (
    <div className={HeaderStyles.header}>
      <Nav>
        <HeaderSection>
          <LinkComponent
            path="#"
            text="App"
            css={`
              ${borderLinkStyles.borderLink} ${borderLinkStyles.headerNavbarLink}
            `}
          >
            <Icon icon={faMobileScreenButton} css={headerIconStyles.icon} />
          </LinkComponent>
          <SocialMedia
            css={headerFallowUsTextStyles.headerFollowUsText}
            text="Fallow us on:"
            icons={socialMediaIcons}
          />
        </HeaderSection>{" "}
        <HeaderSection>
          <List
            css={headerListStyles.headerNavbarOptions}
            elements={listRightSection}
          />
        </HeaderSection>
      </Nav>
    </div>
  );
};

export default Header;
