/* components */
import Nav from "../../components/nav/Nav";
/* css */
import headerStyles from "./headerStyles.module.css";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Nav />
    </header>
  );
};

export default Header;
