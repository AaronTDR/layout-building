import { FC } from "react";
/* types */
import { HeaderSectionType } from "./headerSectionType";
/* css */
import styles from "./headerSection.module.css";

const HeaderSection: FC<HeaderSectionType> = ({
  children,
}: HeaderSectionType) => {
  return <div className={styles.headerSection}>{children}</div>;
};

export default HeaderSection;
