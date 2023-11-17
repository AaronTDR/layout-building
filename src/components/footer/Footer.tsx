import { useContext } from "react";

/* components */
import FooterServices from "../footerServices/FooterServices";
import FooterLinks from "../footerLinks/FooterLinks";
import Terms from "../terms/Terms";

/* context theme */
import { ThemeContext } from "../../contexts/ThemeProvider";

/* styles */
import footerStyles from "./footer.module.css";
import footerTheme from "./theme/footerTheme.module.css";

/* utils */
import { getThemeClasses } from "../../utils/getThemeClasses/getThemeClasses";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const footerStylesWithTheme = {
    theme: getThemeClasses(isDarkMode, footerTheme),
  };
  return (
    <footer className={`${footerStyles.footer} ${footerStylesWithTheme.theme}`}>
      <FooterServices />
      <FooterLinks />
      <Terms />
    </footer>
  );
};

export default Footer;
