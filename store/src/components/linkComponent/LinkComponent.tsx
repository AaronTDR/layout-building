import { Link } from "react-router-dom";
import { ChildrenPropsType } from "../../types/ChildrenPropsType";
// import styles from "./link-component.module.css";

interface LinkComponentProps {
  css: string;
  children?: ChildrenPropsType;
}

const LinkComponent = ({ css, children }: LinkComponentProps) => {
  /*   const linkStyle = {
    fontSize: textSize,
    color: textColor,
  }; */
  /* if (text !== "") a{adir clase a un parrafo? de lo contrario null*/
  return (
    <Link to="#" className={css}>
      {children}
    </Link>
  );
};

export default LinkComponent;
