import "./Country.css";
import React from "react";

const Country = props => {
  const { name, capital, flags, area, continents } = props.country;

  return (
    <div className="country">
      <h1>Name: {name.common}</h1>
      <img src={flags.png} alt="flag" />
      <h2>Capital: {capital}</h2>
      <h2>Area: {area} sq. km</h2>
      <h2>Continent: {continents}</h2>
    </div>
  );
};

export default Country;
