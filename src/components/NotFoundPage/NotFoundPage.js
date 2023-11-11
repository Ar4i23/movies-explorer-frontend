import React from "react";
import { useNavigate } from "react-router-dom";

import "./NotFoundPage.css";

function NotFoundPage() {
  const navigate = useNavigate();

  function pathGo() {
    navigate(-2);
  }

  return (
    <main>
      <section className="notfound">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__paragraph">Страница не найдена</p>
        <button onClick={pathGo} className="notfound__signout">
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFoundPage;
