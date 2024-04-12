import { useState, ChangeEvent, FormEvent, FC } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* Types */
import { SearchBarType } from "./searchBarType";

/* Styles */
import searchBarStyles from "../../stylesHome/searchBarStyles.module.css";

/* Utils */
import {
  validateSearch,
  ValidatedType,
} from "../../../../utils/validateSearch/validateSearch";

const SearchBar: FC<SearchBarType> = ({
  placeholder,
  icon,
  cssIcon,
  cssButton,
}: SearchBarType) => {
  const [searchBarValue, setSearchBarValue] = useState<string>("");

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchBarValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { query, errors }: ValidatedType = validateSearch(searchBarValue);

    if (Object.keys(errors).length === 0) {
      navigate(`/search/1?q=${encodeURIComponent(query)}`);
    } else {
      // Handle errors if necessary
      return;
    }
  };
  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={searchBarStyles.stickySearchBarContainer}
    >
      <label htmlFor="searchBar"></label>
      <input
        className={searchBarStyles.stickySearchBarInput}
        type="text"
        name="searchBar"
        id="searchBar"
        value={searchBarValue}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={120}
      />
      <button type="submit" className={cssButton}>
        <i className={cssIcon}>
          <FontAwesomeIcon icon={icon} />
        </i>
      </button>
    </form>
  );
};

export default SearchBar;
