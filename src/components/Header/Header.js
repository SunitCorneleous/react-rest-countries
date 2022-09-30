import React from "react";
import { useState } from "react";
import "./Header.css";

const Header = ({ countries, handler }) => {
  const [input, setInput] = useState("");

  const inputButtonHandler = () => {
    handler(input);
    setInput("");
  };

  return (
    <div className="header">
      <h1 className="heading">Total Countries: {countries.length}</h1>
      <div className="search-container">
        <input
          type="text"
          onChange={e => setInput(e.target.value)}
          value={input}
        />
        <button onClick={inputButtonHandler}>Search</button>
      </div>
    </div>
  );
};

export default Header;
