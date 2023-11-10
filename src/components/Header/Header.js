import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import account from "../../images/account-button.svg";
import menu from "../../images/menu-btn.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
  const [isClickOpen, setIsClickOpen] = React.useState(false);

  const location = useLocation();

  const getShowOneHeader = () => {
    const { pathname } = location;
    return pathname === "/";
  };

  const getShowTwoHeader = () => {
    const { pathname } = location;
    return (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  };

  function handleOpenBurgerMenu() {
    setIsClickOpen(true);
  }

  function handleCloseBurgerMenu() {
    setIsClickOpen(false);
  }

  return (
    <>
      {getShowOneHeader() && (
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
      )}

      {getShowTwoHeader() && (
        <header className="header header_place_theme_dark">
          <Link to="/" className="logo">
            <img src={logo} alt="Логотип сайта по поиску фильмов" />
          </Link>
          <nav className="header__button-container-movie">
            <NavLink to="/movies" className="header__button">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="header__button">
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
            <button
              className="header__button-menu"
              onClick={handleOpenBurgerMenu}
            >
              <img src={menu} alt="Кнопка меню" />
            </button>
          </div>
          {isClickOpen ? (
            <Navigation handleCloseBurgerMenu={handleCloseBurgerMenu} />
          ) : (
            ""
          )}
        </header>
      )}
    </>
  );
}

export default Header;
