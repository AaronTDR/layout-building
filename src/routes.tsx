import Home from "./features/home/pages/home";
import SearchResults from "./features/searchResults/pages/SearchResults";

const routes = [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/search",
    element: <SearchResults />,
  },
];

export default routes;
