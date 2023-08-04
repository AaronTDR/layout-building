import { navType } from "./navType";
import navStyles from "./nav.module.css";

const Nav = ({ children }: navType) => {
  return <div className={navStyles.headerNavbar}>{children}</div>;
};

export default Nav;
