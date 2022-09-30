import React from "react";
import { useState } from "react";
import "./Header.css";

const Header = ({ countries, handler }) => {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");

  const inputButtonHandler = () => {
    if (filter === "all" || filter === "") {
      handler(`name/${input}`);
      setInput("");
    } else if (filter === "region") {
      handler(`region/${input}`);
      setInput("");
    } else if (filter === "capital") {
      handler(`capital/${input}`);
      setInput("");
    }
  };

  const filterHandler = value => {
    setFilter(value);
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
      <fieldset className="radio-buttons">
        <legend>Search by:</legend>

        <div>
          <input
            type="radio"
            id="all"
            name="drone"
            value="all"
            onChange={e => filterHandler(e.target.value)}
          />
          <label htmlFor="all">All</label>
        </div>

        <div>
          <input
            type="radio"
            id="continent"
            name="drone"
            value="region"
            onChange={e => filterHandler(e.target.value)}
          />
          <label htmlFor="continent">Continent</label>
        </div>

        <div>
          <input
            type="radio"
            id="capital"
            name="drone"
            value="capital"
            onChange={e => filterHandler(e.target.value)}
          />
          <label htmlFor="capital">Capital</label>
        </div>
      </fieldset>
    </div>
  );
};

export default Header;
