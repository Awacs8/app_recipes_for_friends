import React, { useEffect, useState } from "react";
import "./recipe.css";
import "../../App.css";
import { v4 as uuidv4 } from "uuid";
import { saveRecipe, getRecipeById } from "../../services/api_service";
import { getId } from "../../services/auth_service";
import { Link } from "react-router-dom";

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
  }, []);

  const handleClick = (recipe) => {
    saveRecipe(userId, recipe)
      .then(() => {
        setInfo("* pogledaj u sačuvanim receptima");
      })
      .catch((error) => {
        setInfo("*recept je već sačuvan");
        console.log(error);
      });
  };

  return (
    <>
      <Link to="/main">
        <button>idi na sve recepte</button>
      </Link>

      <div className="single_recipe">
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
        <button
          style={{ opacity: info.length > 0 ? "0.6" : "1" }}
          onClick={() => {
            handleClick(recipe);
          }}
        >
          dodaj u omiljene
        </button>
        <sup>{info}</sup>
      </div>
    </>
  );
};
export default SingleRecipe;
