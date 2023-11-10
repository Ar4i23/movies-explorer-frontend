import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" id="form" name="form-search">
        <input
          name="query"
          className="search__input"
          id="search-input"
          type="text"
          placeholder="Фильм"
        ></input>
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox />

      <div className="search__border-line"></div>
    </section>
  );
}

export default SearchForm;
