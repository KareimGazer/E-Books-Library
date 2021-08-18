/*
  The Component responsible for displaying the book info
*/
import React, { Component } from "react";
import propTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";

class Book extends Component {
  static prototypes = {
    coverUrl: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    authors: propTypes.array.isRequired,
    id: propTypes.string.isRequired,
    updateBook: propTypes.func.isRequired,
  };

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 190,
              backgroundImage: `url(${this.props.coverUrl})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={this.props.shelf}
              onChange={(event) => {
                BooksAPI.update(
                  { id: this.props.id, shelf: this.props.shelf },
                  event.target.value
                );
                this.props.updateBook(this.props.id, event.target.value);
              }}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">
          {this.props.authors != null &&
            this.props.authors.map((author) => (
              <div key={this.props.authors.indexOf(author)}>{author}</div>
            ))}
        </div>
      </div>
    );
  }
}

export default Book;
