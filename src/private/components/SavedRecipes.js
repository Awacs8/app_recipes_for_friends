import React from "react";
import "./recipe.css";

const SavedRecipes = ({ saved, removeRecipe }) => {
  return (
    <div className="main">
      <div className="recipe_list">
        {saved.map((recipe) => (
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
              <sup>*za uporedjivanje jedinica mere pogledaj odeljak saveti</sup>
              {recipe.ingredients.map((el) => (
                <li key={el.ingName}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedRecipes;
