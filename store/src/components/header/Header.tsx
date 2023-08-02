import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

import Icon from "../icon/Icon";
import LinkComponent from "../linkComponent/LinkComponent";
import HeaderSection from "../headerSection/HeaderSection";
import Nav from "../nav/Nav";
/* css */
import iconStyles from "../../styles/Icon.module.css";
import linkStyles from "../../styles/LinkComponent.module.css";
import HeaderStyles from "./header.module.css";

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
            <Icon icon={faMobileScreenButton} css={iconStyles.icon} />
          </LinkComponent>
        </HeaderSection>{" "}
        <HeaderSection>"lol"</HeaderSection>
      </Nav>
    </div>
  );
};

export default Header;
