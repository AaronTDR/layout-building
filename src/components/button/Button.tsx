import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* Types */
import { ButtonType } from "./ButtonType";

const Button = ({
  onClick,
  disabled,
  cssButton,
  text,
  cssText,
  icon,
  cssIcon,
}: ButtonType) => {
  return (
    <button disabled={disabled} onClick={onClick} className={cssButton}>
      {icon && (
        <i className={cssIcon}>
          <FontAwesomeIcon icon={icon} />
        </i>
      )}

      {text && <div className={cssText}>{text}</div>}
    </button>
  );
};

export default Button;
