import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Price from "./Price";
import Rating from "./Rating";
import { animateScroll as scroll } from 'react-scroll';

const Book = ({ book }) => {
  const [img, setImg] = useState()

  const mountedRef = useRef(true)

  useEffect(() => {
    const image = new Image()
    image.src = book.url
    image.onload = () => {
      setTimeout(() => {
        if(mountedRef){
          setImg(image)
        }
      }, 150)
    };
    return () => {
      mountedRef.current = false;
    }
  })

  function scrollToTop() {
    scroll.scrollToTop({duration: 0});
  }

  return (
    <div className="book">
      {
        img ?
        <>
          <Link to={`/books/${book.id}`} onClick={ scrollToTop } >
            <figure className="book__img--wrapper">
              <img src={img.src} alt="" className="book__img"/>
            </figure>
            <div className="book__title">
              <Link to={`/books/${book.id}`} className="book__title--link">
                {book.title}
              </Link>
            </div>
            <Rating rating={book.rating}/>
            <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
          </Link>
        </>
        :
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
        </>
      }
    </div>
  );
};

export default Book;
