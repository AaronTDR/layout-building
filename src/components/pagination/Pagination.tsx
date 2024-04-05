import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Button from "../../components/button/Button";
import RenderPageNumbers from "./renderPageNumbers/RenderPageNumbers";

/* Theme context */
import { ThemeContext } from "../../contexts/ThemeProvider";

/* Styles */
import styles from "./pagination.module.css";

/* Types */
import { PaginationType } from "./PaginationType";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  maxPagesToShow,
}: PaginationType) => {
  console.log("🚀 ~ currentPage:", currentPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <div className={styles.pagination}>
      <ul className={styles.ul}>
        <li key="previous">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            cssButton={""}
            icon={faArrowLeft}
            cssIcon={""}
          />
        </li>
        <RenderPageNumbers
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          maxPagesToShow={maxPagesToShow}
        />
        <li key="next">
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            cssButton={""}
            icon={faArrowRight}
            cssIcon={""}
          />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
