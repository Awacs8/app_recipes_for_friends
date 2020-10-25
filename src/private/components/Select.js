import React from "react";

const Select = ({ handleChange }) => {
  return (
    <div>
      <label>Prikaži po kategorijama </label>
      <select onChange={handleChange}>
        <option value="izaberi">svi recepti</option>
        <option value="lako">lako</option>
        <option value="srednje">srednje</option>
        <option value="teško">tesko</option>
      </select>
    </div>
  );
};

export default Select;
