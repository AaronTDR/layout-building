import { FC } from "react";
import { Link } from "react-router-dom";
/* types */
import { socialMediaType } from "./socialMediaType";
/* css */
import socialMediaStyles from "./socialMedia.module.css";
import borderLinkStyles from "../../styles/borderLink.module.css";

/* The css provided will determine the size, weight of the text if it exists and the margin of separation between the text and the list of icons */
const SocialMedia: FC<socialMediaType> = ({ css, text, icons }) => {
  const isThereText =
    text !== null ? <span className={css}>{text}</span> : null;
  return (
    <div className={socialMediaStyles.headerSocialMedia}>
      {isThereText}
      {icons.map((icon, i) => (
        <Link to="#" className={borderLinkStyles.headerNavbarLink} key={i}>
          <span className={socialMediaStyles.headerIconContainer}>
            {icon.iconComponent}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
