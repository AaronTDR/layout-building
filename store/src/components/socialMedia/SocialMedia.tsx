import { FC } from "react";
import { Link } from "react-router-dom";
/* types */
import { socialMediaType } from "./socialMediaType";

const SocialMedia: FC<socialMediaType> = ({
  text,
  textCss,
  iconsArr,
  socialMediaContainerCss,
}) => {
  const isThereText =
    text !== null ? <span className={textCss}>{text}</span> : null;
  return (
    <div className={socialMediaContainerCss}>
      {isThereText}
      {iconsArr.map((icon, i) => (
        <Link to="#" key={i}>
          {icon.iconComponent}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
