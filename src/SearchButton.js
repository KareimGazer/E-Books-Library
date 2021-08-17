/*
  This component is responsible for moving to search page
*/
import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchButton extends Component {
  render() {
    return (
      <div className="open-search">
        <Link to="/search" className="open-search-link">
          Add a book
        </Link>
      </div>
    );
  }
}

export default SearchButton;
