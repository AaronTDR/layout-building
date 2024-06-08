import { StateType } from "../../types/ItemsByQueryType";

export type UseInfiniteScrollResultsType = (
  initialState: StateType,
  BASE_URL: string,
  accessToken: string,
  query: string | null
) => [StateType, React.Dispatch<React.SetStateAction<StateType>>];
