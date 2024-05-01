/* Types */
import { Item } from "../../../../types/ResultAPIType";
/* 
export type MainResultsType = {
  results: Item[];
  totalItems: number;
  itemsPerPage: number;
  pagination: boolean;
}; */

type MainResultsWithoutPagination = {
  results: Item[];
  pagination: "false";
};

type MainResultsWithPagination = {
  results: Item[];
  pagination: "true";
  totalItems: number;
  itemsPerPage: number;
};

export type MainResultsType =
  | MainResultsWithoutPagination
  | MainResultsWithPagination;
