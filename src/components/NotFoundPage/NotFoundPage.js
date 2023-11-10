import React from "react";
import { Link } from "react-router-dom";

import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <main>
      <section className="notfound">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__paragraph">Страница не найдена</p>
        <Link to="/" className="notfound__signout">
          Назад
        </Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
