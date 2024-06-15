/* Types */
import { Item } from "../../../../types/ResultAPIType";

type MainResultsWithoutPagination = {
  results: Item[];
  pagination: false;
  totalItems?: never;
  itemsPerPage?: never;
};

type MainResultsWithPagination = {
  results: Item[];
  pagination: true;
  totalItems: number;
  itemsPerPage: number;
};

export type MainResultsType =
  | MainResultsWithoutPagination
  | MainResultsWithPagination;
