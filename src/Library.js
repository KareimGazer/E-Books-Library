/*
  This Component is responsible for containg the library shelves
  It takes list of shelves, where each shelve has a category and booksList props
*/

import React, { Component } from "react";
import Shelf from "./Shelf";
import propTypes from "prop-types";

class Library extends Component {
  static prototypes = {
    updateBook: propTypes.func.isRequired,
    shelves: propTypes.array.isRequired,
  };

  render() {
    return (
      <div className="list-books-content">
        <div>
          {this.props.shelves.map((shelf) => (
            <Shelf
              key={shelf.id}
              shelf={shelf.shelf}
              booksList={shelf.booksList}
              updateBook={this.props.updateBook}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Library;
