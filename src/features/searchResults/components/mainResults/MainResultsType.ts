/* Types */
import { Item } from "../../../../types/ResultAPIType";

export type MainResultsType = {
  results: Item[];
  totalItems: number;
  itemsPerPage: number;
};
