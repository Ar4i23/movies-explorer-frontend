import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <>
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form id="form" name="form-profile" className="profile__form" noValidate>
          <label className="profile__label">
            Имя
            <input
              name="name"
              className="profile__input"
              type="text"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
              required
            />
            <span className="profile__input-error"></span>
          </label>

          <div className="profile__line"></div>
          <label className="profile__label">
            E-mail
            <input
              name="email"
              className="profile__input"
              type="email"
              placeholder="Email"
              required
            />
            <span className="profile__input-error"></span>
          </label>
          <button type="submit" className="profile__button-edit" disabled>
            Редактировать
          </button>
          <Link to="/" className="profile__signout">
            Выйти из аккаунта
          </Link>
        </form>
      </section>
    </>
  );
}

export default Profile;
