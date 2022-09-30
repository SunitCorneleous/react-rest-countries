import React from "react";
import "./Header.css";

const Header = ({ countries }) => {
  return (
    <div className="header">
      <h1 className="heading">Total Countries: {countries.length}</h1>
      <div className="search-container">
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Header;
