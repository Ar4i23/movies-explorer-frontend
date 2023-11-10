import React, { useEffect, useContext, useState } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import Header from "../../Header/Header";
import { EMAIL_PATTERN } from "../../../utils/constants";
import useForm from "../../../hooks/useForm";
import "./Profile.css";

function Profile({ isLoading, signOut, onUpdateUser, loggedIn }) {
  const [isLastValues, setIsLastValues] = useState(false);

  // Контекст
  const currentUser = useContext(CurrentUserContext);

  // Использование хука useForm
  const { enteredValues, errors, handleChangeInput, isFormValid, resetForm } =
    useForm();

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  // Обработчик формы
  function updateUserInfo(event) {
    event.preventDefault();
    onUpdateUser({
      name: enteredValues.name,
      email: enteredValues.email,
    });
  }

  useEffect(() => {
    if (
      currentUser.name === enteredValues.name &&
      currentUser.email === enteredValues.email
    ) {
      setIsLastValues(true);
    } else {
      setIsLastValues(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredValues]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form
          id="form"
          name="form-profile"
          className="profile__form"
          onSubmit={updateUserInfo}
          noValidate
        >
          <label className="profile__label">
            Имя
            <input
              name="name"
              className="profile__input"
              type="text"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
              onChange={handleChangeInput}
              value={enteredValues.name || ""}
              required
            />
            <span className="profile__input-error">{errors.name}</span>
          </label>

          <div className="profile__line"></div>
          <label className="profile__label">
            E-mail
            <input
              name="email"
              className="profile__input"
              type="email"
              placeholder="Email"
              onChange={handleChangeInput}
              pattern={EMAIL_PATTERN}
              value={enteredValues.email || ""}
              required
            />
            <span className="profile__input-error">{errors.email}</span>
          </label>

          <button
            type="submit"
            disabled={!isFormValid ? true : false}
            className={
              !isFormValid || isLoading || isLastValues
                ? "profile__button-edit form__btn-save_inactive"
                : "profile__button-edit"
            }
          >
            Редактировать
          </button>

          <button onClick={signOut} className="profile__signout">
            Выйти из аккаунта
          </button>
        </form>
      </main>
    </>
  );
}

export default Profile;
