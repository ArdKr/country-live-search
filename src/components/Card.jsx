import React, { useState, useEffect } from "react";
// Components
import Form from "./Form";
import List from "./List";
import ResultCount from "./ResultCount";
// Import country list
import countryListArray from "../Countries";

const Card = () => {
  const [searchInput, setSearchInput] = useState("");
  const [countryList] = useState(countryListArray);
  const [searchResult, setSearchResult] = useState([]);

  // Search everytime searchInput state changes
  useEffect(() => {
    // Function that searches the list & returns results
    const search = () => {
      // Only perform a search if search input contains 2 or more chars
      if (searchInput.length > 1) {
        const filteredCountries = countryList.filter((country) => {
          const countryName = country.toLowerCase();
          const searchCountryName = searchInput.toLowerCase();

          return countryName.includes(searchCountryName);
        });

        // If results array wasn't empty, render it
        if (filteredCountries.length !== 0) {
          setSearchResult(filteredCountries);
          return;
        }
      }

      // if search input is empty or the results didn't brind anything, set searchResult to an empty array
      setSearchResult([]);
    };

    search();
  }, [searchInput, countryList]);

  return (
    <div className="border shadow mt-20 p-5 w-96 rounded relative">
      {/* Heading */}
      <h1 className="text-xl text-center text-gray-600">Search country</h1>

      {/* Search input */}
      <Form searchInput={searchInput} setSearchInput={setSearchInput} />

      {/* Results */}
      <List searchResult={searchResult} />

      {/* Results count */}
      <ResultCount searchResult={searchResult} />
    </div>
  );
};

export default Card;
