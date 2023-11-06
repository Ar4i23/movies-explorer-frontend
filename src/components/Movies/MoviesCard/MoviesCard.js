import React, { useState } from "react";
import "./MoviesCard.css";
import filmImg from "../../../images/film-img.jpg";

function MoviesCard() {
  const [isLike, setIsLike] = useState(true);

  const getLikeFilmClick = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <li className="film">
        <img src={filmImg} alt="фото-карточка с картинкой к фильму" className="film__image" />
        <div className="film__wrapper">
          <div className="film__title-block">
            <h2 className="film__title">33 слова о дизайне</h2>
            <p className="film__time">1ч 37м</p>
          </div>
          <button
            type="button"
            className={`film__button-like ${
              isLike ? "film__button-like_active" : ""
            }`}
            onClick={getLikeFilmClick}
          ></button>
        </div>
      </li>
      <li className="film">
        <img src={filmImg} alt="фото-карточка с картинкой к фильму" className="film__image" />
        <div className="film__wrapper">
          <div className="film__title-block">
            <h2 className="film__title">33 слова о дизайне</h2>
            <p className="film__time">1ч 37м</p>
          </div>
          <button type="button" className="film__button-delete"></button>
        </div>
      </li>

      <li className="film">
        <img src={filmImg} alt="фото-карточка с картинкой к фильму" className="film__image" />
        <div className="film__wrapper">
          <div className="film__title-block">
            <h2 className="film__title">33 слова о дизайне</h2>
            <p className="film__time">1ч 37м</p>
          </div>
          <button
            type="button"
            className={`film__button-like ${
              isLike ? "film__button-like_active" : ""
            }`}
            onClick={getLikeFilmClick}
          ></button>
        </div>
      </li>

      <li className="film">
        <img src={filmImg} alt="фото-карточка с картинкой к фильму" className="film__image" />
        <div className="film__wrapper">
          <div className="film__title-block">
            <h2 className="film__title">33 слова о дизайне</h2>
            <p className="film__time">1ч 37м</p>
          </div>
          <button
            type="button"
            className={`film__button-like ${
              isLike ? "film__button-like_active" : ""
            }`}
            onClick={getLikeFilmClick}
          ></button>
        </div>
      </li>

      <li className="film">
        <img src={filmImg} alt="фото-карточка с картинкой к фильму" className="film__image" />
        <div className="film__wrapper">
          <div className="film__title-block">
            <h2 className="film__title">33 слова о дизайне</h2>
            <p className="film__time">1ч 37м</p>
          </div>
          <button
            type="button"
            className={`film__button-like ${
              isLike ? "film__button-like_active" : ""
            }`}
            onClick={getLikeFilmClick}
          ></button>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
