import React from "react";
import Recipe from "./Recipe";

import "../../utils&assets/css/recipe.css";

const RecipeList = ({ filtered, handleClick }) => {
  return (
    <div className="recipe_list">
      {filtered.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe} handleClick={handleClick} />
      ))}
    </div>
  );
};
export default RecipeList;
