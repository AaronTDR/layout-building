import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <button onClick={onClick} className={cssButton}>
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
