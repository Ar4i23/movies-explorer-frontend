import React from "react";
import "./Portfolio.css";
import arrow from "../../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__list">
        <a
          className="portfolio__link portfolio__link-line"
          href="https://github.com/Ar4i23/mesto-react"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__text">Статичный сайт</p>
          <img
            className="portfolio__arrow"
            src={arrow}
            alt="Стрелка для ссылки"
          />
        </a>
        <a
          className="portfolio__link portfolio__link-line"
          href="https://github.com/Ar4i23/russian-travel"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__text">Адаптивный сайт</p>
          <img
            className="portfolio__arrow"
            src={arrow}
            alt="Стрелка для ссылки"
          />
        </a>
        <a
          href="https://github.com/Ar4i23/mesto-react-auth"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__text">Одностраничное приложение</p>
          <img
            className="portfolio__arrow"
            src={arrow}
            alt="Стрелка для ссылки"
          />
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
