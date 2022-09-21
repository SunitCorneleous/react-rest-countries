import "./Countries.css";
import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1 className="heading">Total Countries: {countries.length}</h1>
      <div className="countries">
        {countries.map(country => (
          <Country country={country} />
        ))}
      </div>
    </>
  );
};

export default Countries;
