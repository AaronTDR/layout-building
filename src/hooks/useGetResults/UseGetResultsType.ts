import { StateType } from "../../types/ItemsByQueryType";

export type UseGetResultsType = (
  isMobile: boolean,
  setState: React.Dispatch<React.SetStateAction<StateType>>,
  BASE_URL: string,
  accessToken: string,
  itemsPerPage: number,
  maxItemsAllowed: number
) => (query: string, offset: number) => Promise<void>;
