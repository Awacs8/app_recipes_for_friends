import React from "react";

const Search = ({ searchByName, setSearchByName }) => {
  return (
    <article>
      <label>pronadji recept</label>
      <br />
      <input
        type="text"
        value={searchByName}
        onChange={(e) => setSearchByName(e.target.value)}
      />
    </article>
  );
};
export default Search;
