import Error from "./features/error/pages/Error";
import SearchResults from "./features/searchResults/pages/SearchResults";
import Home from "./features/home/pages/home";

const routes = [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/search",
    element: <SearchResults />,
    exact: true,
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
