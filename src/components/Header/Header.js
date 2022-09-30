import React from "react";
import "./Header.css";

const Header = ({ countries }) => {
  return (
    <div>
      <h1 className="heading">Total Countries: {countries.length}</h1>
    </div>
  );
};

export default Header;
