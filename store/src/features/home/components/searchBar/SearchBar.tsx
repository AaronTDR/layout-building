import { SearchBarType } from "./searchBarType";

import searchBarStyles from "./searchBarStyles.module.css";

const SearchBar = ({ placeholder, children }: SearchBarType) => {
  return (
    <form className={searchBarStyles.stickySearchBarContainer}>
      <label htmlFor="searchBar"></label>
      <input
        className={searchBarStyles.stickySearchBarInput}
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder={placeholder}
      />
      {children}
    </form>
  );
};

export default SearchBar;
