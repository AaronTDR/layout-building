import { useContext } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Button from "../../button/Button";

/* Theme context */
import { ThemeContext } from "../../../contexts/ThemeProvider";

/* Styles */
import styles from "./renderPageNumbers.module.css";

/* Types */
import { RenderPageNumberType } from "./RenderPageNumberType";

const RenderPageNumbers = ({
  totalPages,
  maxPagesToShow,
}: RenderPageNumberType) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const query = searchParams.get("q") || "";
  const { page } = useParams();
  const currentPage: number = Number(page);

  const navigate = useNavigate();

  const { isDarkMode } = useContext(ThemeContext);

  const buttonTheme = isDarkMode
    ? styles.buttonsDarkMode
    : styles.buttonsLightMode;

  const pageNumberTheme = isDarkMode
    ? styles.pageNumberDarkMode
    : styles.pageNumberLightMode;

  const ellipsisTheme = isDarkMode ? styles.ellipsisDark : styles.ellipsisLight;

  // Array to store page numbers
  const pageNumbers = [];

  // Calculate the first page to display
  let startPage = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2));
  // Calculate the last page to display
  const endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 1);

  // Adjust startPage if there are not enough pages after endPage
  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(2, endPage - maxPagesToShow + 1);
  }

  /* Determines whether the button is enabled or not */
  const isDisabledPrev = currentPage === 1;
  const isDisabledNext = currentPage === totalPages;

  /* If the button is disabled, remove the cursor pointer */
  const disabledPrevStyle = {
    opacity: isDisabledPrev ? 0.5 : 1,
    cursor: isDisabledPrev ? "not-allowed" : "pointer",
  };

  const disabledNextStyle = {
    opacity: isDisabledNext ? 0.5 : 1,
    cursor: isDisabledNext ? "not-allowed" : "pointer",
  };

  /* Manage page changes by using the previous and next buttons */
  const handlePrev = () => {
    if (isDisabledPrev) {
      return;
    }
    navigate(`/search/${currentPage - 1}?q=${encodeURIComponent(query)}`);
  };

  const handleNext = () => {
    if (isDisabledNext) {
      return;
    }
    navigate(`/search/${currentPage + 1}?q=${encodeURIComponent(query)}`);
  };

  // Always show page 1
  pageNumbers.push(
    <Link
      key="1"
      to={`/search/1?q=${encodeURIComponent(query)}`}
      className={
        currentPage === 1
          ? `${styles.pageNumber} ${pageNumberTheme} ${styles.active} `
          : `${styles.pageNumber} ${pageNumberTheme}`
      }
    >
      1
    </Link>
  );

  // Add ellipsis if startPage is greater than 2
  if (startPage > 2) {
    pageNumbers.push(
      <li key="ellipsis1" className={`${styles.pageNumber} ${ellipsisTheme}`}>
        ...
      </li>
    );
  }

  // Add the page numbers in the range startPage to endPage
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <Link
        key={i}
        to={`/search/${i}?q=${encodeURIComponent(query)}`}
        className={
          currentPage === i
            ? `${styles.pageNumber} ${pageNumberTheme} ${styles.active}`
            : `${styles.pageNumber} ${pageNumberTheme}`
        }
      >
        {i}
      </Link>
    );
  }

  // Add ellipsis if endPage is less than totalPages - 1
  if (endPage < totalPages - 1) {
    pageNumbers.push(
      <li key="ellipsis2" className={`${styles.pageNumber} ${ellipsisTheme}`}>
        ...
      </li>
    );
  }

  // Always show the last page
  pageNumbers.push(
    <Link
      key={totalPages}
      to={`/search/${totalPages}?q=${encodeURIComponent(query)}`}
      className={
        currentPage === totalPages
          ? `${styles.pageNumber} ${pageNumberTheme} ${styles.active}`
          : `${styles.pageNumber} ${pageNumberTheme}`
      }
    >
      {totalPages}
    </Link>
  );

  // Return page numbers
  return (
    <>
      <Button
        key={"previous"}
        onClick={handlePrev}
        disabled={isDisabledPrev}
        cssButton={`${styles.buttons} ${buttonTheme}`}
        icon={faArrowLeft}
        cssIcon=""
        inlineStyles={disabledPrevStyle}
      />
      {pageNumbers}
      <Button
        key={"next"}
        onClick={handleNext}
        disabled={isDisabledNext}
        cssButton={`${styles.buttons} ${buttonTheme}`}
        icon={faArrowRight}
        cssIcon=""
        inlineStyles={disabledNextStyle}
      />
    </>
  );
};

export default RenderPageNumbers;
