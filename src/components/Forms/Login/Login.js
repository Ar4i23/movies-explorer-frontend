import React from "react";
import "../../Forms/Form/Form";
import Form from "../../Forms/Form/Form";

function Login() {
  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText="Регистрация"
      link="/signup"
    >
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          type="email"
          required
          placeholder="Email"
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
          required
          placeholder="Пароль"
        />
        <span className="form__input-error">Введите пароль</span>
      </label>
    </Form>
  );
}

export default Login;
