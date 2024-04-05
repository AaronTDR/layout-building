export type RenderPageNumberType = {
  totalPages: number;
  currentPage: number;
  handlePageChange: (arg: number) => void;
  maxPagesToShow: number;
};
