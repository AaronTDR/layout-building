import { Item, Picture } from "../../../types/ResultAPIType";

export type SecondDataItemType = {
  code: number;
  body: {
    id: string;
    pictures?: Picture[];
  };
};

export type ResultsType = Item[];

export type PagesType = ResultsType[];

export type QueryType = string | null;
