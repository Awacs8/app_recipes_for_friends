import React from "react";
import "./recipe.css";

const SavedRecipes = ({ saved }) => {
  // let save = [...new Set(saved)]

  return (
    <div className="main">
      <div className="recipe_list">
        {saved.map((recipe) => (
          <div key={recipe.id} className="saved-recipe">
            <h2>{recipe.name}</h2>
            <p>
              <b>Težina:</b> {recipe.difficulty}
            </p>
            <p>
              <b>Vreme pripreme:</b> {recipe.preparation_time} min
            </p>
            <ul>
              <b>Sastojci:</b>
              <sup>*za uporedjivanje jedinica mere pogledaj odeljak saveti</sup>
              {recipe.ingredients.map((el) => (
                <li key={el.name}>
                  {el.name} {el.quantity} {el.unit_of_measure}
                </li>
              ))}
            </ul>
            <ul>
              <b>Način pripreme:</b>
              {recipe.preparation_steps.map((el) => (
                <li key={el.id}>{el}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedRecipes;
