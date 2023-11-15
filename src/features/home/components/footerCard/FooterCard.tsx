import { useContext } from "react";
import { Link } from "react-router-dom";

/* type */
import { FooterCardType } from "./FooterCardType";

/* theme context*/
import { ThemeContext } from "../../../../contexts/ThemeProvider";

/* styles */
import singleLine from "../../../../styles/singleLine.module.css";
import footerCardStyles from "../../stylesHome/footerCard.module.css";

const FooterCard = ({ path, text }: FooterCardType) => {
  // Get theme context
  const themeContext = useContext(ThemeContext);

  // Destructure the context's 'isDarkMode' value, or provide a default value
  const { isDarkMode } = themeContext || { isDarkMode: false };

  // Select text style class based on current theme
  const linkTheme = isDarkMode
    ? footerCardStyles.footerCardSeeMoreLinkDark
    : footerCardStyles.footerCardSeeMoreLinkLight;
  return (
    <div className={footerCardStyles.footerCard}>
      <Link
        to={path}
        className={`${linkTheme} ${footerCardStyles.footerCardSeeMoreLink} ${singleLine.singleLine}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default FooterCard;
