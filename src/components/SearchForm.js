import { useState } from "react";
import { BrandIcon } from "../icons/BrandIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { navigate } from "../Router";

export const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const handleSubmitForm = (event) => {
    event.preventDefault();
    navigate(`/search-results?searchText=${searchText}`);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <section className="search-form">
      <div className="search-form__header">
        <BrandIcon />
        <p className="body-text">
          Информационный сервис о любимых актерах и фильмах!!
        </p>
      </div>
      <form className="search-form__body" onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="search"
          className="input-text"
          placeholder="Tom Hanks"
          value={searchText}
          onChange={handleInputChange}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </section>
  );
};
