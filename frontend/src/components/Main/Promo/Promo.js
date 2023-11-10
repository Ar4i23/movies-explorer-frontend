import React from "react";
import NavTabLinks from "../Promo/NavTabLinks/NavTabLinks";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrappers">
        <div className="promo__wrapper">
          <div className="promo__text-block">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб-разработки.
            </h1>
          </div>
        </div>
      </div>
      <NavTabLinks />
    </section>
  );
}

export default Promo;
