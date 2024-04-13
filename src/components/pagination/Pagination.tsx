import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Icon from "../../components/icon/Icon";
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
  maxPagesToShow,
}: PaginationType) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";
  const { page } = useParams();
  const currentPage: number = Number(page);

  const { isDarkMode } = useContext(ThemeContext);

  const buttonTheme = isDarkMode
    ? styles.buttonsDarkMode
    : styles.buttonsLightMode;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles.pagination}>
      <ul className={styles.ul}>
        <Link
          to={`/search/${currentPage - 1}?q=${encodeURIComponent(query)}`}
          key="previous"
          className={`${styles.buttons} ${buttonTheme}`}
        >
          <Icon icon={faArrowLeft} css="" />
        </Link>
        <RenderPageNumbers
          totalPages={totalPages}
          maxPagesToShow={maxPagesToShow}
        />
        <Link
          to={`/search/${currentPage + 1}?q=${encodeURIComponent(query)}`}
          key="next"
          className={`${styles.buttons} ${buttonTheme}`}
        >
          <Icon icon={faArrowRight} css="" />
        </Link>
      </ul>
    </div>
  );
};

export default Pagination;
