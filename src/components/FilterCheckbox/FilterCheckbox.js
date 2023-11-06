import React from "react"
import "./FilterCheckbox.css"

function FilterCheckbox({ onFilter, isShortMovies }) {
  return (
    <fieldset className="filter" name="fieldset-filter">
      <label className="filter__label">
        <input
          className="filter__input"
          type="checkbox"
          onChange={onFilter}
          checked={isShortMovies}
        ></input>
        <span className="filter__input-title">Короткометражки</span>
      </label>
    </fieldset>
  )
}

export default FilterCheckbox
