/*
  This component is responsible for moving to search page
*/

import React, { Component } from "react";
import propTypes from "prop-types";

class SearchButton extends Component {
  render() {
    return (
      <div className="open-search">
        <button onClick={this.props.onClick}>Add a book</button>
      </div>
    );
  }
}

export default SearchButton;
