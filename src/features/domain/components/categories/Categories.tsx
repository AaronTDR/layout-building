/* Components */
import Icon from "../../../../components/icon/Icon";
import TextTruncate from "../../../../components/textTruncate/TextTruncate";

/* Styles */
import styles from "./categories.module.css";

/* Types */
import { CategoriesType } from "./CategoriesType";

const Categories = ({ domain }: CategoriesType) => {
  return (
    <ul className={styles.categoriesList}>
      {domain.categories.map((category) => (
        <li key={category.id} className={styles.category}>
          <span className={styles.iconContainer}>
            <Icon icon={category.icon} css={styles.icon} />
          </span>
          <div className={styles.nameContainer}>
            <TextTruncate
              text={category.name}
              rows={3}
              tagType={"h2"}
              css={styles.name}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
