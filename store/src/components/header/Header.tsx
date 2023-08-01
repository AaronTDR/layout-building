import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import Icon from "../icon/Icon";
import LinkComponent from "../linkComponent/LinkComponent";
import HeaderSection from "../headerSection/HeaderSection";
import Nav from "../nav/Nav";

import linkStyles from "../../styles/LinkComponent.module.css";
import HeaderStyles from "./header.module.css";

const Header = () => {
  return (
    <div className={HeaderStyles.header}>
      <Nav>
        <HeaderSection>
          <LinkComponent
            css={`
              ${linkStyles.link} ${linkStyles.headerNavbarLink}
            `}
          >
            {"Text link :)"} <Icon icon={faCoffee} />
          </LinkComponent>
        </HeaderSection>{" "}
        <HeaderSection>"lol"</HeaderSection>
      </Nav>
    </div>
  );
};

export default Header;
