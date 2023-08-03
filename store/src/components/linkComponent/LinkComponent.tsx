import { FC } from "react";
import { Link } from "react-router-dom";
/* Types */
import { linkComponentType } from "./linkComponentsType";

const LinkComponent: FC<linkComponentType> = ({
  path,
  text,
  css,
  children,
}: linkComponentType) => {
  const isThereIcon = children ? children : null;

  return (
    <Link to={path} className={css}>
      {isThereIcon}
      {text}
    </Link>
  );
};

export default LinkComponent;
