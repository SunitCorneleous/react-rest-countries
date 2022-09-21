import "./Country.css";
import React from "react";

const Country = props => {
  const { name, capital } = props.country;

  return (
    <div className="country">
      <h1>Name: {name.common}</h1>
      <h3>Capital: {capital}</h3>
    </div>
  );
};

export default Country;
