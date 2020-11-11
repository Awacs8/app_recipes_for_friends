import React from "react";

const Select = ({ handleChange }) => {
  return (
    <>
      <label>težina</label>
      <select onChange={handleChange}>
        <option value="izaberi">svi recepti</option>
        <option value="lako">lako</option>
        <option value="srednje">srednje</option>
        <option value="teško">tesko</option>
      </select>

      <label htmlFor="category">kategorije</label>
      <select name="category" id="category" onChange={handleChange}>
        <option value="izaberi">svi recepti</option>
        <option value="supe/čorbe">Supe/čorbe</option>
        <option value="namazi">Namazi</option>
        <option value="testa/pite">Testa/pite</option>
        <option value="glavna jela">Glavna jela</option>
        <option value="dezerti">Dezerti</option>
      </select>
    </>
  );
};

export default Select;
