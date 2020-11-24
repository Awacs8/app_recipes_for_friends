import React from "react";
import "./recipe.css";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { v4 as uuidv4 } from "uuid";

const SavedRecipes = ({ uniqueSaved, removeRecipe }) => {
  return (
    <div className="main">
      <Carousel>
        {uniqueSaved.map((recipe) => (
          <div key={recipe.id} className="saved-recipe">
            <button onClick={() => removeRecipe(recipe)}>X</button>
            <h2>{recipe.name}</h2>
            <p>
              <b>Težina:</b> {recipe.difficulty}
            </p>
            <p>
              <b>Vreme pripreme:</b> {recipe.preparation_time} min
            </p>
            <ul>
              <b>Sastojci:</b>
              <sup>
                *za uporedjivanje jedinica mere pogledaj odeljak{" "}
                <Link to="/tips"> saveti</Link>
              </sup>
              {recipe.ingredients.map((el) => (
                <li key={uuidv4()}>
                  {el.ingName} {el.quantity} {el.unit_of_measure}
                </li>
              ))}
            </ul>
            <ul>
              <b>Način pripreme:</b>
              {recipe.preparation_steps.map((step) => (
                <li key={uuidv4()}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SavedRecipes;
