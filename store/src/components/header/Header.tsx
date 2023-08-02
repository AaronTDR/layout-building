import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
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
import HeaderSection from "../headerSection/HeaderSection";
import Nav from "../nav/Nav";
/* css */
import socialMediaIconStyles from "../../styles/socialMediaIcon.module.css";
import headerIconStyles from "../../styles/headerIcon.module.css";
import linkStyles from "../../styles/link.module.css";
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

const Header = () => {
  return (
    <div className={HeaderStyles.header}>
      <Nav>
        <HeaderSection>
          <LinkComponent
            text="App"
            css={`
              ${linkStyles.link} ${linkStyles.headerNavbarLink}
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
        <HeaderSection>"lol"</HeaderSection>
      </Nav>
    </div>
  );
};

export default Header;
