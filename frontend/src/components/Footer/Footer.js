import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>

      <div className="footer__border-line"></div>

      <div className="footer__wrapper">
        <p className="footer__author"> © {new Date().getFullYear()}. Artur</p>
        <a
          className="footer__link"
          href="https://practicum.yandex.ru"
          target="_blank"
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
        <a
          className="footer__link"
          href="https://github.com/Ar4i23"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
