import { Item } from "./ResultAPIType";

type ResultsType = Item[];
type PagesType = ResultsType[];

export type StateType = {
  isMobile: boolean;
  isFirstRender: boolean;
  itemsPerPage: number;
  maxItemsAllowed: number;
  offset: number;
  results: ResultsType;
  loading: boolean;
  loadingMore: boolean;
  resultsLoaded: boolean;
  fetchError: boolean | string;
  currentPage: number;
  totalItems: number;
  pages: PagesType;
};
