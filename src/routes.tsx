import Domain from "./features/domain/pages/Domain";
import SearchResults from "./features/searchResults/pages/SearchResults";
import Home from "./features/home/pages/home";
import Error from "./features/error/pages/Error";

const routes = [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/search/:page",
    element: <SearchResults />,
    exact: true,
  },
  {
    path: "/domain/:name",
    element: <Domain />,
    exact: true,
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
