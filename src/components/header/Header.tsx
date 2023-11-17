import { useContext } from "react";
/* components */

import Nav from "../../components/nav/Nav";

/* theme context */
import { ThemeContext } from "../../contexts/ThemeProvider";

/* styles */
import headerStyles from "./headerStyles.module.css";

const Header = () => {
  // Get the theme context
  const themeContext = useContext(ThemeContext);
  const { isDarkMode } = themeContext || { isDarkMode: false };

  // Select text style class based on current theme
  const headerTheme = isDarkMode
    ? headerStyles.headerDark
    : headerStyles.headerLight;
  return (
    <header className={`${headerTheme} ${headerStyles.header}`}>
      <Nav />
    </header>
  );
};

export default Header;
