import buttonStyles from "./buttonStyles.module.css";

type ButtonType = {
  cssArr: string[] | null;
  children: React.ReactNode;
};

const Button = ({ cssArr, children }: ButtonType) => {
  const buttonStyle = cssArr
    ? `${buttonStyles.button} ${cssArr.join(" ")}`
    : buttonStyles.button;

  console.log("🚀 ~ file: Button.tsx:10 ~ Button ~ buttonStyle:", buttonStyle);
  return <button className={buttonStyle}>{children}</button>;
};

export default Button;
