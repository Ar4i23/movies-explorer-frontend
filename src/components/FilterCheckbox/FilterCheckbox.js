import React from "react"
import "./FilterCheckbox.css"

function FilterCheckbox({ onFilter, isShortMovies }) {
  return (
    <form className="filter" name="form-filter">
      <label className="filter__label">
        <input
          className="filter__input"
          type="checkbox"
          onChange={onFilter}
          checked={isShortMovies}
        ></input>
        <span className="filter__input-title">Короткометражки</span>
      </label>
    </form>
  )
}

export default FilterCheckbox
