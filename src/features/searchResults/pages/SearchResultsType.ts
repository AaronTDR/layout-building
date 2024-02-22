import { Picture } from "../../../types/ResultAPIType";

export type SecondDataItemType = {
  code: number;
  body: {
    id: string;
    pictures?: Picture[];
  };
};
