import { useContext } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Icon from "../icon/Icon";

/* theme context */
import { ThemeContext } from "../../contexts/ThemeProvider";

/* types */
import { ThemeButtonType } from "./ThemeButtonType";

const ThemeButton = ({
  cssButton,
  cssIcon,
  text,
  cssText,
}: ThemeButtonType) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={cssButton}>
      <Icon icon={(isDarkMode && faMoon) || faSun} css={cssIcon} />
      {text && <span className={cssText ? cssText : ""}>{text}</span>}
    </button>
  );
};

export default ThemeButton;
