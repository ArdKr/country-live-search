import React from "react";

const List = ({ searchResult }) => {
  // Don't show the component if user isn't searching

  if (searchResult === []) {
    return null;
  }

  return (
    <ul className="pt-5 pb-5 mb-12">
      {searchResult.map((item) => {
        return (
          <li className="text-gray-600 bg-gray-50 mt-2 p-2 font-semibold ">
            🌍 {item}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
