import styles from "./nav.module.css";

const Nav = ({ children }: ChildrenProps) => {
  return <div className={styles["header__navbar"]}>{children}</div>;
};

export default Nav;
