import "./Country.css";
import React from "react";

const Country = props => {
  const { name, capital, flags, area, continents } = props.country;

  return (
    <div className="country">
      <h1>Name: {name.common}</h1>
      <img src={flags.png} alt="flag" />
      <h3>Capital: {capital}</h3>
      <h3>Area: {area} sq. km</h3>
      <h3>Continent: {continents}</h3>
    </div>
  );
};

export default Country;
