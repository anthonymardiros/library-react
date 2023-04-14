import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Explore = () => {
    return(
        <section id="id">
            <div className="container container__explore">
                <div className="row row__column">
                    <h2>
                        Explore more <span className="purple">Books</span>
                    </h2>
                    <Link to="/books" onClick={() => {
                            scroll.scrollToTop({ duration: 20 });
                        }}>
                        <button className="btn">Explore Books</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Explore;