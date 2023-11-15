/* Types */
import { SearchBarType } from "./searchBarType";

/* styles */
import searchBarStyles from "../../stylesHome/searchBarStyles.module.css";

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
