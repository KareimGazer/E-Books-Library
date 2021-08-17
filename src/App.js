import React from "react";
import Library from "./Library";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchButton from "./SearchButton";
import Header from "./Header";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    shelves: [],
    categories: ["Currently Reading", "Want to Read", "Read"],
    allBooks: [],
  };

  showSearchPage = () => {
    this.setState(() => ({
      showSearchPage: true,
    }));
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

  //loads books from udacity API
  getNewBooks = () => {
    BooksAPI.getAll().then((books) => {
      console.log("got new books");
      console.log(books);
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
      console.log("show me List");
      console.log(bList);
      return { allBooks: bList };
    });
    this.setUpShelves();
  };

  /* 
    the search button should lead to /search
    
   */
  render() {
    console.log("render of App");
    console.log(this.state.shelves);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
          <div className="list-books">
            <Header />
            <Library
              shelves={this.state.shelves}
              updateBook={this.updateBook}
            />
            <SearchButton onClick={this.showSearchPage} />
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
