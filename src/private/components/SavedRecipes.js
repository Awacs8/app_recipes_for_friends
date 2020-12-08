import React, { useState, useEffect } from "react";
import "./recipe.css";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { v4 as uuidv4 } from "uuid";
import { getId, getUserById } from "../../services/auth_service";
import { removeSavedRecipe } from "../../services/api_service";

const SavedRecipes = () => {
  const [saved, setSaved] = useState([]);
  const [info, setInfo] = useState("");
  const id = getId();

  useEffect(() => {
    getUserById(id).then((response) => {
      setSaved(response.data.saved_recipes);
    });
  }, [id]);

  const removeRecipe = (recipe) => {
    removeSavedRecipe(id, recipe).then((response) => {
      setInfo(`obrisan recept ${recipe.name}`);
      setSaved(response.data.saved_recipes);
    });
  };

  return (
    <div className="main">
      <label>{info}</label>
      <Carousel>
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
