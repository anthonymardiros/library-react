import React from 'react';
import Logo from '../assets/Library.svg';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    return(
        <footer>
            <div className="footer__container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className='footer__logo'>
                            <img src={Logo} className='footer__logo--img' alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className='footer__link' onClick={() => {
                            scroll.scrollToTop({ duration: 20 });
                        }}>Home</Link>
                        <span className='footer__link no-cursor'>About</span>
                        <Link to="/books" className='footer__link' onClick={() => {
                            scroll.scrollToTop({ duration: 20 });
                        }}>Books</Link>
                        <Link to="/cart" className='footer__link' onClick={() => {
                            scroll.scrollToTop({ duration: 20 });
                        }}>Cart</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2023
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;