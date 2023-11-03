import React from "react";
import { Link, NavLink } from "react-router-dom";
import account from "../../images/account-button.svg";
import "./Navigation.css";

function Navigation({ handleCloseBurgerMenu }) {
  const setActiveLinkColor = ({ isActive }) =>
    isActive ? "navigation__link_active" : "navigation__link";

  return (
    <div className="navigation">
      <div className="navigation__container"></div>
      <div className="navigation__menu">
        <button
          className="navigation__button-close"
          onClick={handleCloseBurgerMenu}
        ></button>
        <nav className="navigation__links">
          <NavLink
            to="/"
            className={setActiveLinkColor}
            onClick={handleCloseBurgerMenu}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={setActiveLinkColor}
            onClick={handleCloseBurgerMenu}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={setActiveLinkColor}
            onClick={handleCloseBurgerMenu}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link
          to="/profile"
          className="navigation__button-account"
          onClick={handleCloseBurgerMenu}
        >
          <img navigation__account-image src={account} alt="Кнопка аккаунта" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
