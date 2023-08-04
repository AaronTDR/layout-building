import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import Icon from "../../../components/icon/Icon";
import Button from "../../../components/button/Button";
import Logo from "../../../components/logo/Logo";
import SearchBar from "../components/searchBar/SearchBar";
import Header from "../../../components/header/Header";
import Container from "../../../components/container/Container";

import singleLineStyles from "../../../styles/singleLine.module.css";
import homeStyles from "./homeStyles.module.css";

const Home = () => {
  return (
    <div className={homeStyles.container}>
      <Container css={homeStyles.headerContainer}>
        <Header />
      </Container>
      <Container css={homeStyles.stickyContainer}>
        <Container css={homeStyles.stickyTopContainer}>
          <Logo />
          <Button cssArr={[homeStyles.stickyButtonAddress]}>
            <Icon icon={faLocationDot} css={homeStyles.stickyAddressIcon} />
            <span className={homeStyles.stickyAddressTextContainer}>
              <span
                className={`${homeStyles.stickyAddressTextTop} ${singleLineStyles.singleLine}`}
              >
                Deliver to
              </span>
              <span className="sticky__address-text--bottom single-line">
                Enter your address
              </span>
            </span>
          </Button>
          <SearchBar placeholder="Search anything...">
            <Icon
              icon={faMagnifyingGlass}
              css={homeStyles.stickySearchBarIcon}
            />
          </SearchBar>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
