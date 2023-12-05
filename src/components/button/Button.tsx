/* Components */
import Icon from "../icon/Icon";

/* Types */
import { ButtonType } from "./ButtonType";
const Button = ({
  onClick,
  cssButton,
  text,
  cssText,
  icon,
  cssIcon,
}: ButtonType) => {
  return (
    <div onClick={onClick} className={cssButton}>
      {icon && <Icon icon={icon} css={cssIcon} />}
      {text && <div className={cssText}>{text}</div>}
    </div>
  );
};

export default Button;
