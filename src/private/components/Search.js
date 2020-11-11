import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <label>pronadji recept:</label>
      <input onChange={handleSearch} />
    </div>
  );
};
export default Search;
