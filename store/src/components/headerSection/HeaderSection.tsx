import styles from "./headerSection.module.css";
import { ChildrenPropsType } from "../../types/ChildrenPropsType";

const HeaderSection = ({ children }: ChildrenPropsType) => {
  return <div className={styles.headerSection}>{children}</div>;
};

export default HeaderSection;
