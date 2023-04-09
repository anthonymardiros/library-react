import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Book from "../components/ui/Book";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";

//Use the git add command to stage the changes to your files. For example, git add . will stage all changes in the current directory.
//Use the git commit command to create a commit with a message describing the changes. For example, git commit -m "updated files"
//Use the git push command to push the changes to the remote repository on GitHub. For example, git push origin master (assuming the remote is named "origin" and the branch you are updating is "master")

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book)
  }

  function bookExistOnCart(){
    return cart.find(book => +book.id === +id)
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="books__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dignissimos est totam commodi debitis dolorem delectus
                    sapiente, molestiae, obcaecati porro enim excepturi eveniet
                    quidem at nihil, voluptate ducimus tenetur et modi!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dignissimos est totam commodi debitis dolorem delectus
                    sapiente, molestiae, obcaecati porro enim excepturi eveniet
                    quidem at nihil, voluptate ducimus tenetur et modi!
                  </p>
                </div>
                {bookExistOnCart() ? (
                  <Link to={"/cart"} className="book__link" >
                    <button className="btn" title="title" >Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" title="title" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
