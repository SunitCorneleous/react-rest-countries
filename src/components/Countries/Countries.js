import "./Countries.css";
import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import Header from "../Header/Header";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("all");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/${search}`)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err));
  }, [search]);

  const searchHandler = input => {
    setSearch(`name/${input}`);
  };

  return (
    <>
      <Header countries={countries} handler={searchHandler}></Header>
      <div className="countries">
        {countries.map(country => (
          <Country key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
};

export default Countries;
