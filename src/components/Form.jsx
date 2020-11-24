import React from "react";

const Form = ({ searchInput, setSearchInput }) => {
  // Update searchInput state on input value change
  const update = (e) => {
    setSearchInput(e.target.value);
  };


  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1 text-gray-400">
        🔍
      </span>
      <input
        type="text"
        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 mt-5"
        placeholder="Start typing a country"
        value={searchInput}
        onChange={update}
      />
    </div>
  );
};

export default Form;
