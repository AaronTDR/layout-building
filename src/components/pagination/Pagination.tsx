import RenderPageNumbers from "./renderPageNumbers/RenderPageNumbers";

/* Styles */
import styles from "./pagination.module.css";

/* Types */
import { PaginationType } from "./PaginationType";

const Pagination = ({
  totalItems,
  itemsPerPage,
  maxPagesToShow,
}: PaginationType) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles.pagination}>
      <ul className={styles.ul}>
        <RenderPageNumbers
          totalPages={totalPages}
          maxPagesToShow={maxPagesToShow}
        />
      </ul>
    </div>
  );
};

export default Pagination;
