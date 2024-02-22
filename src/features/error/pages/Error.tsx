import { useContext } from "react";
import { Link } from "react-router-dom";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Icon from "../../../components/icon/Icon";

/* Theme context */
import { ThemeContext } from "../../../contexts/ThemeProvider";

/* Styles */
import styles from "./error.module.css";
import errorTheme from "./theme/errorTheme.module.css";

/* Utils */
import { getThemeClasses } from "../../../utils/getThemeClasses/getThemeClasses";

const Error = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const stylesWithTheme = {
    theme: getThemeClasses(isDarkMode, errorTheme),
  };
  return (
    <div className={`${stylesWithTheme.theme} ${styles.container}`}>
      <div className={styles.wrapper}>
        <div className={styles.message}>
          <span className={styles.errorFace}>
            <Icon icon={faFaceSadTear} css={styles.icon} />
          </span>{" "}
          <h2 className={styles.text}>Sorry page not found</h2>
        </div>
        <Link to="/" className={styles.link}>
          HOME PAGE
        </Link>
      </div>
    </div>
  );
};

export default Error;
