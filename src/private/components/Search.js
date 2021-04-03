import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <label>pronadji recept:</label>
      <br />
      <input onChange={handleSearch} placeholder="...pronadji recept" />
    </div>
  );
};
export default Search;
