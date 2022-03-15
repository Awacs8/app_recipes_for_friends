import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Plus } from "../../utils&assets/img/plus.svg";

const AddIngredient = ({ addIngredient }) => {
  const [ingredient, setIngredient] = useState({
    ingName: "",
    quantity: "",
    unit_of_measure: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setIngredient({ ...ingredient, [name]: value });
  };
  const reset = () => {
    setIngredient({
      ingName: "",
      quantity: "",
      unit_of_measure: "",
    });
  };
  return (
    <>
      <label>Sastojci: </label>
      <sup>
        *za uporedjivanje jedinica mere pogledaj odeljak
        <Link to="/tips"> saveti</Link>
      </sup>
      <br />
      <article>
        {/* <label htmlFor="ingName">naziv sastojka: </label> */}
        <input
          type="text"
          id="ingName"
          name="ingName"
          value={ingredient.ingName}
          onChange={handleChange}
          placeholder="naziv"
        />

        {/* <label htmlFor="quantity">količina: </label> */}
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={ingredient.quantity}
          onChange={handleChange}
          placeholder="količina"
        />

        {/* <label> jedinica mere: </label> */}
        <select
          name="unit_of_measure"
          id="unit_of_measure"
          value={ingredient.unit_of_measure}
          onChange={handleChange}
        >
          <option value="">jedinica mere</option>
          <option value="kom">kom</option>
          <option value="kg">kg</option>
          <option value="g">g</option>
          <option value="l">l</option>
          <option value="ml">ml</option>
          <option value="šolja">šolja</option>
          <option value="tsp (kafena kašičica)">tsp (kafena kašičica)</option>
          <option value="tbsp (supena kašika)">tbsp (supena kašika)</option>
        </select>
        <button
          onClick={(e) => {
            addIngredient(e, ingredient);
            reset();
          }}
        >
          <Plus />
        </button>
      </article>
    </>
  );
};

export default AddIngredient;
