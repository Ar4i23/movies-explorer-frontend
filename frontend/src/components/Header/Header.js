import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import account from "../../images/account-button.svg";
import menu from "../../images/menu-btn.svg";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpenBurger() {
    setIsClicked(true);
  }

  function handleCloseBurger() {
    setIsClicked(false);
  }

  const setHeaderActiveColorLink = ({ isActive }) =>
    isActive ? "header__button_active" : "header__button";

  return (
    <>
      {!loggedIn ? (
        <header className="header">
          <Link to="/" className="logo">
            <img src={logo} alt="Логотип сайта фильмов" />
          </Link>
          <nav className="header__button-container">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link
              to="/signin"
              className="header__button header__button_theme_primary"
            >
              Войти
            </Link>
          </nav>
        </header>
      ) : (
        <header className="header header_place_theme_dark">
          <Link to="/" className="logo">
            <img src={logo} alt="Логотип сайта по поиску фильмов" />
          </Link>
          <nav className="header__button-container-movie">
            <NavLink to="/movies" className={setHeaderActiveColorLink}>
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className={setHeaderActiveColorLink}>
              Сохранённые фильмы
            </NavLink>
          </nav>
          <div className="header__button-container">
            <Link to="/profile" className="header__button-account">
              <img
                className="header__account-image"
                src={account}
                alt="Кнопка входа в аккаунт"
              />
            </Link>
            <button className="header__button-menu" onClick={handleOpenBurger}>
              <img src={menu} alt="Кнопка меню" />
            </button>
          </div>
          {isClicked ? (
            <Navigation handleCloseBurger={handleCloseBurger} />
          ) : (
            ""
          )}
        </header>
      )}
    </>
  );
}

export default Header;
