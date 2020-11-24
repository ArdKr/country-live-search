import React, { useState, useEffect } from "react";
// Components
import Form from "./Form";
import List from "./List";
import ResultCount from "./ResultCount";
// Import country list
import countryListArray from "../Countries";

const Card = () => {
  const [searchInput, setSearchInput] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  //   Set country list as a state when component mounts
  useEffect(() => {
    setCountryList(countryListArray);
  }, []);

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
