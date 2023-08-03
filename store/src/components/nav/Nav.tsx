import navStyles from "./nav.module.css";
import { navType } from "./navType";
const Nav = ({ children }: navType) => {
  return <div className={navStyles.headerNavbar}>{children}</div>;
};

export default Nav;
