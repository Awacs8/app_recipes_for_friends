import React, { useState } from "react";
import "./recipe.css";
import "../../App.css";

const Recipe = ({ recipe, handleClick }) => {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState("");

  return (
    <div className="recipe">
      <h2>{recipe.name}</h2>
      <p>
        <b>Težina:</b> {recipe.difficulty}
      </p>
      <p>
        <b>Vreme pripreme:</b> {recipe.preparation_time} min
      </p>
      <button
        onClick={() => setShow(!show)}
        style={{ display: show ? "none" : "block" }}
      >
        pogledaj recept
      </button>
      <div style={{ display: show ? "block" : "none", overflow: "visible" }}>
        <ul>
          <b>Sastojci:</b>
          {/* <sup>*za uporedjivanje jedinica mere pogledaj odeljak saveti</sup> */}
          {recipe.ingredients.map((el) => (
            <li key={el.index}>
              {el.ingName} {el.quantity} {el.unit_of_measure}
            </li>
          ))}
        </ul>
        <ul>
          <b>Način pripreme:</b>
          {recipe.preparation_steps.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <button
          onClick={() => {
            handleClick(recipe);
            setInfo("* pogledaj u sačuvanim receptima");
          }}
        >
          dodaj u omiljene
        </button>
        <sup>{info}</sup>
        <button onClick={() => setShow(!show)}>zatvori</button>
      </div>
    </div>
  );
};
export default Recipe;
