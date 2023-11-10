import React from "react";
import foto from "../../../images/myAvatar.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__student">Студент</h2>
      <div className="about-me__wrapper">
        <div className="about-me__text-block">
          <h3 className="about-me__name">Artur</h3>
          <h4 className="about-me__job">Фронтенд-разработчик, 35 лет</h4>
          <p className="about-me__paragraph">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/Ar4i23"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={foto} alt="Фотография автора" className="about-me__foto" />
      </div>
    </section>
  );
}

export default AboutMe;
