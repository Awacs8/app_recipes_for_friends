import React from "react";

const Select = ({ handleChange }) => {
  return (
    <article>
      <label>sortiraj po</label>
      <br />
      <select name="difficulty" id="difficulty" onChange={handleChange}>
        <option value="izaberi">...težini</option>
        <option value="lako">lako</option>
        <option value="srednje">srednje</option>
        <option value="teško">teško</option>
      </select>
      <select name="category" id="category" onChange={handleChange}>
        <option value="izaberi">...kategoriji</option>
        <option value="supe/čorbe">Supe/čorbe</option>
        <option value="namazi">Namazi</option>
        <option value="testa/pite">Testa/pite</option>
        <option value="glavna jela">Glavna jela</option>
        <option value="dezerti">Dezerti</option>
      </select>
    </article>
  );
};

export default Select;
