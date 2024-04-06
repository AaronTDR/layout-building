/* Styles */
import styles from "./renderPageNumbers.module.css";

/* Types */
import { RenderPageNumberType } from "./RenderPageNumberType";

const RenderPageNumbers = ({
  totalPages,
  currentPage,
  handlePageChange,
  maxPagesToShow,
}: RenderPageNumberType) => {
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
    <li
      key="1"
      /* className={1 === currentPage ? "active" : ""} */ className={
        currentPage === 1
          ? `${styles.pageNumber} ${styles.active}`
          : styles.pageNumber
      }
    >
      {" "}
      {/*className={1 === currentPage ? `${styles.pageNumber} ${styles.active}` : styles.pageNumber }*/}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className={styles.pageNumber}
      >
        1
      </button>
    </li>
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
      <li
        key={i}
        className={
          currentPage === i
            ? `${styles.pageNumber} ${styles.active}`
            : styles.pageNumber
        }
      >
        <button
          onClick={() => handlePageChange(i)}
          className={styles.pageNumber}
        >
          {i}
        </button>
      </li>
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
    <li
      key={totalPages}
      className={
        currentPage === totalPages
          ? `${styles.pageNumber} ${styles.active}`
          : styles.pageNumber
      }
    >
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={styles.pageNumber}
      >
        {totalPages}
      </button>
    </li>
  );

  // Return page numbers
  return <>{pageNumbers}</>;
};

export default RenderPageNumbers;
