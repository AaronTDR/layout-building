import { ButtonType } from "./buttonType";

import buttonStyles from "./buttonStyles.module.css";

const Button = ({ cssArr, children }: ButtonType) => {
  const buttonStyle = cssArr
    ? `${buttonStyles.button} ${cssArr.join(" ")}`
    : buttonStyles.button;

  return <button className={buttonStyle}>{children}</button>;
};

export default Button;
