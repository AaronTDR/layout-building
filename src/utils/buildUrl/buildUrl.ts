export const buildUrl = (BASE_URL, type, endpoint, params = {}) => {
  const queryParams = Object.keys(params)
    .map((key) => {
      if (type === "SEARCH") {
        return `${key}=${encodeURIComponent(params[key])}`;
      } else if (type === "MULTIGET") {
        return `${key}=${params[key]}`;
      }
      return "";
    })
    .join("&");

  return `${BASE_URL}${endpoint}?${queryParams}`;
};
