import { Link } from "react-router-dom";
/* types */
import { LogoType } from "./logoType.ts";

import logoImg from "../../assets/img/logo/logo-img.png";

const Logo = ({
  logoLinkCss,
  logoContainerCss,
  logoImgCss,
  logoTextCss,
}: LogoType) => {
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
