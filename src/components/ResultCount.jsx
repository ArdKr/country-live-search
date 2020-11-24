import React from "react";

const ResultCount = ({searchResult}) => {
  return (
    <div className="bg-gray-50 absolute left-0 bottom-0 w-full p-5 text-center">
      <p className="text-gray-600">Showing {searchResult.length} results</p>
    </div>
  );
};

export default ResultCount;
