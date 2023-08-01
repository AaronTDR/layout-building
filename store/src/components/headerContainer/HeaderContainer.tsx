import Header from "../header/Header";
import styles from "./header-container.module.css";

const HeaderContainer = () => {
  return (
    <div className={styles["header__container"]}>
      <Header />
    </div>
  );
};

export default HeaderContainer;
