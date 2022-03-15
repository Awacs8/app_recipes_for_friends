import React from "react";

const Select = ({
  filterByCategory,
  setFilterByCategory,
  filterByDifficulty,
  setFilterByDifficulty,
}) => {
  return (
    <article>
      <label>sortiraj po</label>
      <br />
      <select
        name={filterByDifficulty}
        id="difficulty"
        onChange={(e) => setFilterByDifficulty(e.target.value)}
      >
        <option value="">...težini</option>
        <option value="lako">lako</option>
        <option value="srednje">srednje</option>
        <option value="teško">teško</option>
      </select>
      <select
        name={filterByCategory}
        id="category"
        onChange={(e) => setFilterByCategory(e.target.value)}
      >
        <option value="">...kategoriji</option>
        <option value="supe/čorbe">supe/čorbe</option>
        <option value="namazi">namazi</option>
        <option value="testa/pite">testa/pite</option>
        <option value="glavna jela">glavna jela</option>
        <option value="dezerti">dezerti</option>
      </select>
    </article>
  );
};

export default Select;
