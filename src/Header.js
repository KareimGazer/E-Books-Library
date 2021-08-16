/*
  This component is responsible for page Heading
*/

import React, { Component } from "react";
import propTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
    );
  }
}

export default Header;
