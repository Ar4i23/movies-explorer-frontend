import React from "react";
import "./NavTabLinks.css";
import { Link } from "react-scroll";

function NavTabLinks() {
  return (
    <nav className="navtablinks">
      <Link to="about" className="navtablinks__link" smooth={true} duration={600}>
        О проекте
      </Link>
      <Link to="techs" className="navtablinks__link" smooth={true} duration={600}>
        Технологии
      </Link>
      <Link
        to="about-me"
        className="navtablinks__link"
        smooth={true}
        duration={600}
      >
        Студент
      </Link>
    </nav>
  );
}

export default NavTabLinks;
