import { useContext } from "react";
/* components */

import Nav from "../../components/nav/Nav";

/* theme context */
import { ThemeContext } from "../../contexts/ThemeProvider";

/* styles */
import headerStyles from "./headerStyles.module.css";

/* theme styles */
import headerContainerTheme from "./theme/headerContainerTheme.module.css";

/* utils  */
import { getThemeClasses } from "../../utils/getThemeClasses/getThemeClasses";

const Header = () => {
  // Get the theme context
  const themeContext = useContext(ThemeContext);
  const { isDarkMode } = themeContext || { isDarkMode: false };

  // Select text style class based on current theme
  const headerContainerWithTheme = {
    theme: getThemeClasses(isDarkMode, headerContainerTheme),
  };

  const headerTheme = isDarkMode
    ? headerStyles.headerDark
    : headerStyles.headerLight;
  return (
    <div
      className={`${headerContainerWithTheme.theme} ${headerStyles.headerContainer}`}
    >
      <header className={`${headerTheme} ${headerStyles.header}`}>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
