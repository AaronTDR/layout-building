import { Link } from "react-router-dom";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
/* components */
import Icon from "../../components/icon/Icon";
/* types */
import { socialMediaType } from "./socialMediaType";

const icons = [
  { iconName: faInstagram, path: "#" },
  { iconName: faTwitter, path: "#" },
  { iconName: faFacebook, path: "#" },
  { iconName: faWhatsapp, path: "#" },
];

const SocialMedia = ({
  text,
  textCss,
  containerCss,
  iconCss,
}: socialMediaType) => {
  const isThereText = text ? <span className={textCss}>{text}</span> : null;

  return (
    <div className={containerCss}>
      {isThereText}
      {icons.map((el, i) => (
        <Link to={el.path} key={i}>
          <Icon icon={el.iconName} css={iconCss} />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
