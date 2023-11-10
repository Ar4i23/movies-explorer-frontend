import React from "react";
import "../../Forms/Form/Form.css";
import Form from "../../Forms/Form/Form";

function Register() {
  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
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
          required
        />
        <span className="form__input-error">Заполните поле "Имя".</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          type="email"
          placeholder="Email"
          required
        />
        <span className="form__input-error">
          Адрес электронной почты должен содержать символ "@".
        </span>
      </label>
      <label className="form__label">
        Пароль
        <input
          name="password"
          className="form__input"
          type="password"
          placeholder="Пароль"
          required
        />
        <span className="form__input-error">Заполните поле "Пароль".</span>
      </label>
    </Form>
  );
}

export default Register;
