import styles from "./header-section.module.css";
import { ChildrenPropsType } from "../../types/ChildrenPropsType";

const HeaderSection = ({ children }: ChildrenPropsType) => {
  return <div className={styles["header__section"]}>{children}</div>;
};

export default HeaderSection;
