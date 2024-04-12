import { Link, useLocation, useParams } from "react-router-dom";

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
  const query = searchParams.get("q");
  const { page } = useParams();
  const currentPage: number = Number(page);
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

  // Always show page 1
  pageNumbers.push(
    <Link
      key="1"
      to={`/search/1?q=${encodeURIComponent(query)}`}
      className={
        currentPage === 1
          ? `${styles.pageNumber} ${styles.active}`
          : styles.pageNumber
      }
    >
      1
    </Link>
  );

  // Add ellipsis if startPage is greater than 2
  if (startPage > 2) {
    pageNumbers.push(
      <li key="ellipsis1" className={styles.pageNumber}>
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
            ? `${styles.pageNumber} ${styles.active}`
            : styles.pageNumber
        }
      >
        {i}
      </Link>
    );
  }

  // Add ellipsis if endPage is less than totalPages - 1
  if (endPage < totalPages - 1) {
    pageNumbers.push(
      <li key="ellipsis2" className={styles.pageNumber}>
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
          ? `${styles.pageNumber} ${styles.active}`
          : styles.pageNumber
      }
    >
      {totalPages}
    </Link>
  );

  // Return page numbers
  return <>{pageNumbers}</>;
};

export default RenderPageNumbers;
