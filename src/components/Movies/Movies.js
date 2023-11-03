import React from "react"
import "./Movies.css"
import SearchForm from "../Movies/SearchForm/SearchForm"
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"

function Movies() {
  return (
    <main>
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <Footer />
      </section>
    </main>
  )
}

export default Movies
