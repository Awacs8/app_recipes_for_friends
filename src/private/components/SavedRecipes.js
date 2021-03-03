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
  const userId = getId();

  useEffect(() => {
    getUserById(userId).then((response) => {
      setSaved(response.data.saved_recipes);
    });
  }, [userId]);

  const removeRecipe = (recipe) => {
    removeSavedRecipe(userId, recipe).then((response) => {
      setSaved(response.data.saved_recipes);
      setInfo(`obrisan recept ${recipe.title}`);
    });
  };

  return (
    <div className="main">
      <label>{info}</label>
      <label style={{ display: saved.length > 0 ? "none" : "inline-block" }}>
        trenutno nema sačuvanih recepata
      </label>
      <Carousel>
        {saved.map((recipe) => (
          <div key={recipe._id} className="saved-recipe">
            <button onClick={() => removeRecipe(recipe)}>X</button>
            <h2>{recipe.title}</h2>
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
