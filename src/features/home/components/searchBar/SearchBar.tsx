import Icon from "../../../../components/icon/Icon";

/* Types */
import { SearchBarType } from "./searchBarType";

/* styles */
import searchBarStyles from "../../stylesHome/searchBarStyles.module.css";

const SearchBar = ({
  placeholder,
  icon,
  iconCss,
  onInputChange,
}: SearchBarType) => {
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
      {icon && <Icon icon={icon} css={iconCss} />}
    </form>
  );
};

export default SearchBar;
