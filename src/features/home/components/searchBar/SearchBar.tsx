import { useState, ChangeEvent, FormEvent, FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/button/Button";
import { SearchBarType } from "./searchBarType";
import searchBarStyles from "../../stylesHome/searchBarStyles.module.css";
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
      navigate(`/search?q=${encodeURIComponent(query)}`);
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
      <Button
        onClick={handleSubmit}
        cssButton={cssButton}
        icon={icon}
        cssIcon={cssIcon}
      />
    </form>
  );
};

export default SearchBar;
