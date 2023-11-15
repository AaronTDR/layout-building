import { useContext } from "react";
import { Link } from "react-router-dom";

/* Types */
import { LogoType } from "./logoType.ts";

/* Theme context */
import { ThemeContext } from "../../contexts/ThemeProvider.tsx";

/* Assets */
import lightLogo from "../../assets/img/logo/light-modo-logo.png";
import darkLogo from "../../assets/img/logo/dark-mode-logo.png";

const Logo = ({
  logoLinkCss,
  logoContainerCss,
  logoImgCss,
  logoTextCss,
}: LogoType) => {
  const { isDarkMode } = useContext(ThemeContext);
  const logoImg = (isDarkMode && darkLogo) || lightLogo;
  return (
    <Link to="/" className={logoLinkCss}>
      <div className={logoContainerCss}>
        <img className={logoImgCss} src={logoImg} alt="Store logo image" />
        <h1 className={logoTextCss}>DealDepot</h1>
      </div>
    </Link>
  );
};

export default Logo;
