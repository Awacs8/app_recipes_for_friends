import React, { useState } from "react";
import { sendRecipes } from "../../services/api_service";
import NewRecipeForm from "../components/NewRecipeForm";
import NewRecipePreview from "../components/NewRecipePreview";

const NewRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    difficulty: "",
    preparation_time: 0,
    ingredients: [],
    preparation_steps: [],
  });
  const [info, setInfo] = useState("");

  const sendRecipe = (e) => {
    e.preventDefault();
    sendRecipes(recipe).then(() => {
      setRecipe({
        title: "",
        category: "",
        difficulty: "",
        preparation_time: 0,
        ingredients: [],
        preparation_steps: [],
      });
      setInfo("Tvoj recept se nalazi na listi svih recepata");
    });
  };

  return (
    <>
      <h2>Popuni formu i podeli recept sa nama</h2>
      <div className="add">
        <NewRecipeForm recipe={recipe} setRecipe={setRecipe} />
        <NewRecipePreview recipe={recipe} />
      </div>
      <section>
        <button onClick={sendRecipe}>dodaj recept</button>
        <sup>{info}</sup>
      </section>
    </>
  );
};

export default NewRecipe;
