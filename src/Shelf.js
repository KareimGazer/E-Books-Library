/*
  This component is responsible for containing the books of each shelve 
*/

import React, { Component } from "react";
import Book from "./Book";
import propTypes from "prop-types";

class Shelf extends Component {
  static prototypes = {
    key: propTypes.string.isRequired,
    shelf: propTypes.string.isRequired,
    booksList: propTypes.array.isRequired,
    updateBook: propTypes.func.isRequired,
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.booksList.map((book) => (
              <li key={book.id}>
                <Book
                  coverUrl={
                    book.imageLinks != null
                      ? book.imageLinks.smallThumbnail
                      : ""
                  }
                  title={book.title}
                  authors={book.authors}
                  id={book.id}
                  shelf={book.shelf}
                  updateBook={this.props.updateBook}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
