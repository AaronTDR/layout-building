import { FC } from "react";
import { containerType } from "./containerType";

const HeaderContainer: FC<containerType> = ({ css, children }) => {
  return <div className={css}>{children}</div>;
};

export default HeaderContainer;
