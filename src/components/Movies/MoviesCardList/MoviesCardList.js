import React from "react";
import "./MoviesCardList.css";
import SearchError from "../../SearchError/SearchError";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList() {
  const location = useLocation();
  const isSavedMoviesPage = location.pathname === "/saved-movies";

  return (
    <section className="films">
      <SearchError errorText={"Ничего не найдено"} />

      <SearchError
        errorText={
          "Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        }
      />

      <ul className="films__list">
        <MoviesCard />
      </ul>

      <div className="films__button-container">
        {!isSavedMoviesPage && <button className="films__button">Ещё</button>}
      </div>
    </section>
  );
}

export default MoviesCardList;
