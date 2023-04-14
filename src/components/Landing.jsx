import React from "react";
import undrawBooks from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="landing">
              America's most awarded online library platform
            </h1>
            <h2>
              Find your dream book with <div className="purple">Library</div>
            </h2>
            <Link to="/books" onClick={() => {
                            scroll.scrollToTop({ duration: 20 });
                        }}>
              <button className="btn">Browse books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={undrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
