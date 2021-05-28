import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <article>
      <label>pronadji recept</label>
      <br />
      <input onChange={handleSearch} />
    </article>
  );
};
export default Search;
