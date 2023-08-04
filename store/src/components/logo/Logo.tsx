import { Link } from "react-router-dom";

import { LogoType } from "./logoType.ts";
import logoImg from "../../assets/img/logo/logo-img.png";

import logoStyles from "./logoStyles.module.css";

const Logo = ({
  logoLinkCss,
  logoContainerCss,
  logoImgCss,
  logoTextCss,
}: LogoType) => {
  const linkStyle = logoLinkCss ? logoLinkCss : logoStyles.logoLink;
  const containerStyle = logoContainerCss
    ? logoContainerCss
    : logoStyles.logoContainer;
  const imgStyle = logoImgCss ? logoImgCss : logoStyles.logoImg;
  const textStyle = logoTextCss ? logoTextCss : logoStyles.logoText;

  return (
    <Link to="/" className={linkStyle}>
      <div className={containerStyle}>
        <img className={imgStyle} src={logoImg} alt="Store logo image" />
        <h1 className={textStyle}>DealDepot</h1>
      </div>
    </Link>
  );
};

export default Logo;
