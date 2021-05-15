import React from "react";
import { Link } from "react-router-dom";

const NewRecipePreview = ({ recipe }) => {
  return (
    <div className="recipe_view">
      <h3>Izgled recepta</h3>
      <h2>{recipe.title}</h2>
      <p>
        <b>
          <u>Kategorija:</u>
        </b>
        {recipe.category}
      </p>
      <p>
        <b>
          <u>Težina:</u>
        </b>
        {recipe.difficulty}
      </p>
      <p>
        <b>
          <u>Vreme pripreme: </u>
        </b>
        {recipe.preparation_time} min
      </p>
      <ul>
        <b>
          <u>Sastojci:</u>
        </b>
        <br />
        <sup>
          *za uporedjivanje jedinica mere pogledaj odeljak
          <Link to="/tips"> saveti</Link>
        </sup>
        {recipe.ingredients.map((el) => (
          <li key={el.ingName}>
            {el.ingName} {el.quantity} {el.unit_of_measure}
          </li>
        ))}
      </ul>
      <ul>
        <b>
          <u>Način pripreme:</u>
        </b>
        {recipe.preparation_steps.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewRecipePreview;
