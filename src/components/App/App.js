import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Profile from "../Forms/Profile/Profile";
import Register from "../Forms/Register/Register";
import Login from "../Forms/Login/Login";
import "./App.css";

function App() {
  const location = useLocation();

  const getShowHeader = () => {
    const { pathname } = location;
    return (
      pathname === "/" ||
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  };

  const getShowFooter = () => {
    const { pathname } = location;
    return pathname === "/";
  };

  return (
    <div className="root">
      <div className="root__content">
        {getShowHeader() && <Header />}
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
        </Routes>
        {getShowFooter() && <Footer />}
      </div>
    </div>
  );
}

export default App;
