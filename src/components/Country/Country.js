import "./Country.css";
import React from "react";

const Country = props => {
  const { name, capital, flags } = props.country;

  return (
    <div className="country">
      <h1>Name: {name.common}</h1>
      <img src={flags.png} alt="flag" />
      <h3>Capital: {capital}</h3>
    </div>
  );
};

export default Country;
