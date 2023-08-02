import { Link } from "react-router-dom";
import { ChildrenPropsType } from "../../types/ChildrenPropsType";

interface LinkComponentProps {
  text: string;
  css: string;
  children?: ChildrenPropsType;
}

const LinkComponent = ({ text, css, children }: LinkComponentProps) => {
  console.log(
    "🚀 ~ file: LinkComponent.tsx:13 ~ LinkComponent ~ children:",
    children
  );

  return (
    <Link to="#" className={css}>
      {children}
      {text}
    </Link>
  );
};

export default LinkComponent;
