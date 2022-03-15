import React, { useEffect, useState } from "react";
import "../../utils&assets/css/recipe.css";
import { v4 as uuidv4 } from "uuid";
import { saveRecipe, getRecipeById } from "../../services/api_service";
import { getId } from "../../services/auth_service";
import { Link } from "react-router-dom";
import { ReactComponent as FavIcon } from "../../utils&assets/img/star.svg";
import { ReactComponent as FilledFavIcon } from "../../utils&assets/img/star-filled.svg";

const SingleRecipe = ({ match }) => {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [preparationSteps, setPreparationsSteps] = useState([]);
  const [info, setInfo] = useState("");
  const userId = getId();
  const recipeId = match.params._id;

  useEffect(() => {
    getRecipeById(recipeId).then((response) => {
      const recipe = response.data;
      setRecipe(recipe);
      setIngredients(recipe.ingredients);
      setPreparationsSteps(recipe.preparation_steps);
    });
  }, [recipeId]);

  const handleClick = (recipe) => {
    saveRecipe(userId, recipe)
      .then(() => {
        setInfo("* pogledaj u sačuvanim ");
      })
      .catch((error) => {
        setInfo("* recept je već u sačuvanim ");
        console.log(error);
      });
  };

  return (
    <div className="single_recipe">
      <button
        style={{ opacity: info.length > 0 ? "0.6" : "1" }}
        onClick={() => {
          handleClick(recipe);
        }}
      >
        {info.length > 0 ? <FilledFavIcon /> : <FavIcon />}
      </button>
      <sup>
        {info}
        <Link
          to="/saved"
          style={{ display: info.length > 0 ? "inline" : "none" }}
        >
          receptima
        </Link>
      </sup>
      <h2>{recipe.title}</h2>
      <p>
        <b>Težina:</b> {recipe.difficulty}
      </p>
      <p>
        <b>Vreme pripreme:</b> {recipe.preparation_time} min
      </p>
      <ul>
        <b>Sastojci:</b>
        {ingredients.map((el) => (
          <li key={uuidv4()}>
            {el.ingName} {el.quantity} {el.unit_of_measure}
          </li>
        ))}
      </ul>
      <ul>
        <b>Način pripreme:</b>
        {preparationSteps.map((el) => (
          <li key={uuidv4()}>{el}</li>
        ))}
      </ul>
    </div>
  );
};
export default SingleRecipe;
