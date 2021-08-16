/*
  The Component responsible for displaying the book info
*/

import React, { Component } from "react";
import propTypes from "prop-types";

class Book extends Component {
  // static proptypes: {};

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: this.props.coverWidth,
              height: this.props.coverHeight,
              backgroundImage: `url(${this.props.coverUrl})`,
            }}
          />
          <div className="book-shelf-changer">
            <select>
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
        <div className="book-authors">{this.props.author}</div>
      </div>
    );
  }
}

export default Book;
