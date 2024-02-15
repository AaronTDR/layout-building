import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*  theme context */
import { ThemeContext } from "../../contexts/ThemeProvider";

/* Styles */
import styles from "./message.module.css";
import messageTheme from "./theme/messageTheme.module.css";

/* Utils */
import { getThemeClasses } from "../../utils/getThemeClasses/getThemeClasses";

const Message = ({ icon, title, message }) => {
  const { isDarkMode } = useContext(ThemeContext);

  const styleWithTheme = {
    theme: getThemeClasses(isDarkMode, messageTheme),
  };

  return (
    <div className={`${styleWithTheme.theme} ${styles.wrapper}`}>
      <i className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </i>
      <div className={styles.messageContent}>
        <div className={styles.titleContainer}>
          <h2>{title}</h2>
        </div>
        <div className={styles.messageContainer}>
          <p className={styles.cssMessage}>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
