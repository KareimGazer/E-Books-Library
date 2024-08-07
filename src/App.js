import React from "react";
import Library from "./Library";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchButton from "./SearchButton";
import Header from "./Header";
import SearchPage from "./SearchPage";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    shelves: [],
    categories: ["Currently Reading", "Want to Read", "Read"],
    allBooks: [],
  };

  // filters books into appropriate shelves
  setUpShelves = () => {
    this.setState((currentState) => ({
      shelves: [
        {
          id: 0,
          shelf: "Currently Reading",
          booksList: currentState.allBooks.filter(
            (book) => book.shelf === "currentlyReading"
          ),
        },
        {
          id: 1,
          shelf: "Want to Read",
          booksList: currentState.allBooks.filter(
            (book) => book.shelf === "wantToRead"
          ),
        },
        {
          id: 2,
          shelf: "Read",
          booksList: currentState.allBooks.filter(
            (book) => book.shelf === "read"
          ),
        },
      ],
    }));
  };

  // returns a map of books id and their shelf to help show that in the search page
  getBooksMap = () => {
    let booksDictionary = {};
    this.state.allBooks.map((book) => (booksDictionary[book.id] = book.shelf));
    return booksDictionary;
  };

  //loads books from udacity API
  getNewBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        allBooks: books,
      });
      this.setUpShelves();
    });
  };

  componentDidMount() {
    this.getNewBooks();
  }

  // updates the book info (state.allBooks) in the App component
  updateBook = (id, shelf) => {
    this.setState((currentState) => {
      var bList = currentState.allBooks;
      for (var i = 0; i < bList.length; i++) {
        if (bList[i].id === id) {
          bList[i].shelf = shelf;
        }
      }
      return { allBooks: bList };
    });
    this.setUpShelves();
  };

  // add a book from search page to the main list of books
  addBook = (id, shelf) => {
    BooksAPI.get(id).then((book) => {
      this.setState((currentState) => {
        let booksList = currentState.allBooks;
        book.shelf = shelf;
        booksList.push(book);
        return { allBooks: booksList };
      });
      this.setUpShelves();
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <Header />
              <Library
                shelves={this.state.shelves}
                updateBook={this.updateBook}
              />
              <SearchButton />
            </div>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage addBook={this.addBook} getBooksMap={this.getBooksMap} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
