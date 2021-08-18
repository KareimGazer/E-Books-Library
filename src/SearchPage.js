/*
  This component is responsible for containing the books of each shelve 
*/

import React, { Component } from "react";
import Book from "./Book";
import propTypes, { bool } from "prop-types";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  static prototypes = {
    addBook: propTypes.func.isRequired,
  };

  state = {
    booksList: [],
    query: "",
  };

  //componentDidMount() {}
  searchBooks = (bookName) => {
    if (bookName !== "") {
      BooksAPI.search(bookName)
        .then((books) => {
          if (Array.isArray(books)) {
            this.setState({
              booksList: books,
            });
          } else {
            this.setState({
              booksList: [],
            });
          }
        })
        .catch(() => {
          console.log("rejected");
        });
    } else {
      this.setState({
        booksList: [],
      });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => {
                this.setState({
                  query: event.target.value,
                });
                this.searchBooks(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {console.log(this.state.booksList)}
            {this.state.booksList.map((book) => (
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
                  shelf={bool.shelf}
                  updateBook={this.props.addBook}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
