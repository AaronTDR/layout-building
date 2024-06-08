type Params = {
  [key: string]: string | number;
};

type RequestType = "SEARCH" | "MULTIGET";

export type buildUrlTypes = {
  BASE_URL: string;
  type: RequestType;
  endpoint: string;
  params: Params;
};
