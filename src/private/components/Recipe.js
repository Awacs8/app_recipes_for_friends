import React, { useState } from "react";
import "./recipe.css";
import "../../App.css";
import { v4 as uuidv4 } from "uuid";
import { getId } from "../../services/auth_service";
import { saveRecipe } from "../../services/api_service";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState("");
  const id = getId();

  const handleClick = (recipe) => {
    saveRecipe(id, recipe)
      .then(() => {
        setInfo("* pogledaj u sačuvanim receptima");
      })
      .catch((error) => {
        setInfo("*recept je već sačuvan");
        console.log(error);
      });
  };

  return (
    <div
      className="recipe"
      style={{
        flex: show ? "0 70%" : "0 40%",
        transform: show ? "rotate(0deg)" : "rotate(-3deg)",
      }}
    >
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
            <li key={uuidv4()}>
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
          style={{ opacity: info.length > 0 ? "0.6" : "1" }}
          onClick={() => {
            handleClick(recipe);
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
