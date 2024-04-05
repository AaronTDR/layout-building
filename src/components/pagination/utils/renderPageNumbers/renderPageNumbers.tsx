const renderPageNumbers = (
  totalPages: number,
  currentPage: number,
  handlePageChange: (page: number) => void,
  maxPagesToShow: number
): JSX.Element[] => {
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
    <li key="1" className={1 === currentPage ? "active" : ""}>
      <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
        1
      </button>
    </li>
  );

  // Add ellipsis if startPage is greater than 2
  if (startPage > 2) {
    pageNumbers.push(<li key="ellipsis1">...</li>);
  }

  // Add the page numbers in the range startPage to endPage
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <li key={i} className={i === currentPage ? "active" : ""}>
        <button onClick={() => handlePageChange(i)}>{i}</button>
      </li>
    );
  }

  // Add ellipsis if endPage is less than totalPages - 1
  if (endPage < totalPages - 1) {
    pageNumbers.push(<li key="ellipsis2">...</li>);
  }

  // Always show the last page
  pageNumbers.push(
    <li key={totalPages} className={totalPages === currentPage ? "active" : ""}>
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        {totalPages}
      </button>
    </li>
  );

  // Return page numbers
  return pageNumbers;
};

export default renderPageNumbers;
