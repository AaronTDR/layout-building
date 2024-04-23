/* Components */
import { useContext } from "react";
import Icon from "../../../../components/icon/Icon";
import TextTruncate from "../../../../components/textTruncate/TextTruncate";

/* Context theme */
import { ThemeContext } from "../../../../contexts/ThemeProvider";

/* Styles */
import styles from "./categories.module.css";

/* Types */
import { CategoriesType } from "./CategoriesType";

const Categories = ({ domain }: CategoriesType) => {
  // Get the theme context
  const themeContext = useContext(ThemeContext);
  const { isDarkMode } = themeContext;

  const iconTheme = isDarkMode ? styles.iconDarkMode : styles.iconLightMode;

  const nameTheme = isDarkMode ? styles.nameDark : styles.nameLight;

  return (
    <ul className={styles.categoriesList}>
      {domain.categories.map((category) => (
        <li key={category.id} className={styles.category}>
          <span className={styles.iconContainer}>
            <Icon
              icon={category.icon}
              css={`
                ${iconTheme} ${styles.icon}
              `}
            />
          </span>
          <div className={styles.nameContainer}>
            <TextTruncate
              text={category.name}
              rows={3}
              tagType={"h2"}
              css={`
                ${nameTheme} ${styles.name}
              `}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
