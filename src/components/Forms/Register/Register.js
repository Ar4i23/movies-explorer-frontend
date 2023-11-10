import React from "react";
import "../../Forms/Form/Form.css";
import Form from "../../Forms/Form/Form";
import useForm from "../../../hooks/useForm";
import { EMAIL_PATTERN } from "../../../utils/constants";

function Register({ onRegister, isLoading }) {
  // Хук useForm
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

  function updateUserInfo(event) {
    event.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      registrationMessage="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
      onSubmit={updateUserInfo}
      isDisabledBtn={!isFormValid}
      isLoading={isLoading}
    >
      <label className="form__label">
        Имя
        <input
          name="name"
          className="form__input"
          type="text"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          onChange={handleChangeInput}
          value={enteredValues.name || ""}
          required
        />
        <span className="form__input-error">{errors.name}</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          type="email"
          placeholder="Email"
          onChange={handleChangeInput}
          value={enteredValues.email || ""}
          pattern={EMAIL_PATTERN}
          required
        />
        <span className="form__input-error">{errors.email}</span>
      </label>
      <label className="form__label">
        Пароль
        <input
          name="password"
          className="form__input"
          type="password"
          placeholder="Пароль"
          minLength="6"
          maxLength="12"
          onChange={handleChangeInput}
          value={enteredValues.password || ""}
          required
        />
        <span className="form__input-error">{errors.password}</span>
      </label>
    </Form>
  );
}

export default Register;
