import { StateType } from "../../types/ItemsByQueryType";

export type UsePaginationResultsType = (
  initialState: StateType,
  BASE_URL: string,
  accessToken: string,
  query: string,
  page: string | undefined
) => [StateType, React.Dispatch<React.SetStateAction<StateType>>];
