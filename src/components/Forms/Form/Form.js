import React from "react"
import { Link } from "react-router-dom"
import "./Form.css"
import logo from "../../../images/logo.svg"

function Form({ linkText, link, children, title, buttonText, question }) {
  return (
    <main>
      <section className="form">
        <Link to="/" className="logo">
          <img src={logo} alt="Логотип сайта" />
        </Link>
        <h1 className="form__title">{title}</h1>
        <form className="forma" id="form" name="form" noValidate>
          {children}
          <button type="submit" className="form__btn-save">
            {buttonText}
          </button>
        </form>
        <p className="form__paragraph">
          {question}
          <Link to={link} className="form__link">
            {linkText}
          </Link>
        </p>
      </section>
    </main>
  )
}

export default Form
