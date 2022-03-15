import React from "react";
import { Link } from "react-router-dom";
import "../../utils&assets/css/recipe.css";
import { ReactComponent as Open } from "../../utils&assets/img/open.svg";

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <h2>{recipe.title}</h2>
      <p>
        <b>Težina:</b> {recipe.difficulty}
      </p>
      <p>
        <b>Vreme pripreme:</b> {recipe.preparation_time} min
      </p>
      <Link to={`/recipe/${recipe._id}`}>
        <button>
          <Open />
        </button>
      </Link>
    </div>
  );
};
export default Recipe;
