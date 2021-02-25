import React, { useState } from "react";
import { sendRecipes } from "../../services/api_service";
import { Link } from "react-router-dom";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [preparation_time, setPreparation_time] = useState("");
  const [ingName, setIngName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit_of_measure, setUnit_of_measure] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [preparation_steps, setPreparation_steps] = useState([]);
  const [preparation_step, setPreparation_step] = useState("");
  const [info, setInfo] = useState("");

  let recipe = {
    title: title,
    category: category,
    difficulty: difficulty,
    preparation_time: preparation_time,
    ingredients: ingredients,
    preparation_steps: preparation_steps,
  };

  const ingredient = {
    ingName: ingName,
    quantity: quantity,
    unit_of_measure: unit_of_measure,
  };

  const addIngredient = (e) => {
    e.preventDefault();
    ingredients.push(ingredient);
    setIngredients(ingredients);
    setIngName("");
    setQuantity("");
    setUnit_of_measure("");
  };

  const addStep = (e) => {
    e.preventDefault();
    preparation_steps.push(preparation_step);
    setPreparation_steps(preparation_steps);
    setPreparation_step("");
  };

  const sendRecipe = (e) => {
    e.preventDefault();
    console.log(recipe);
    sendRecipes(recipe).then(() => {
      // console.log(recipe);
      setInfo("Tvoj recept se nalazi na listi svih recepata");
      setTitle("");
      setCategory("");
      setDifficulty("");
      setPreparation_time("");
      setIngredients([]);
      setPreparation_steps([]);
    });
  };

  return (
    <>
      <h2>Popuni formu i podeli recept sa nama</h2>
      <div className="add">
        <div className="add_recipe">
          <label htmlFor="name">Naziv recepta: </label>
          <input
            type="text"
            name="title"
            id="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <label htmlFor="category">Kategorija: </label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>izaberi...</option>
            <option>supe/čorbe</option>
            <option>testa/pite</option>
            <option>namazi</option>
            <option>glavna jela</option>
            <option>dezerti</option>
          </select>
          <br />
          <label htmlFor="difficulty">Težina: </label>
          <input
            type="radio"
            value="lako"
            name="difficulty"
            onClick={(e) => setDifficulty(e.target.value)}
          />
          <label>lako</label>
          <input
            type="radio"
            value="srednje"
            name="difficulty"
            onClick={(e) => setDifficulty(e.target.value)}
          />
          <label>srednje</label>
          <input
            type="radio"
            value="tesko"
            name="difficulty"
            onClick={(e) => setDifficulty(e.target.value)}
          />
          <label>teško</label>
          <br />
          <label htmlFor="preparation_time">Vreme pripreme (min): </label>
          <input
            type="number"
            id="preparation_time"
            name="preparation_time"
            value={preparation_time}
            onChange={(e) => setPreparation_time(e.target.value)}
          />
          <br />
          <label>Sastojci: </label>
          <br />
          <label htmlFor="ingName">naziv sastojka: </label>
          <input
            type="text"
            id="ingName"
            name="ingName"
            value={ingName}
            onChange={(e) => setIngName(e.target.value)}
          />
          <br />
          <label htmlFor="quantity"> količina: </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <br />
          <label> jedinica mere: </label>
          <select onChange={(e) => setUnit_of_measure(e.target.value)}>
            <option>izaberi...</option>
            <option>kom</option>
            <option>kg</option>
            <option>g</option>
            <option>l</option>
            <option>ml</option>
            <option>šolja</option>
            <option>tsp (kafena kašičica)</option>
            <option>tbsp (supena kašika)</option>
          </select>
          <br />
          <button onClick={addIngredient}>dodaj sledeći sastojak</button>
          <br />
          <label htmlFor="preparation_step">Koraci: </label>
          <br />
          <textarea
            type="text"
            id="preparation_step"
            name="preparation_step"
            value={preparation_step}
            onChange={(e) => setPreparation_step(e.target.value)}
          />
          <br />
          <button onClick={addStep}>dodaj sledeći korak</button>
          <br />
        </div>
        <div className="recipe_view">
          <h3>Izgled recepta</h3>
          <h2>{recipe.title}</h2>
          <p>
            <b>
              <u>Kategorija:</u>
            </b>
            {recipe.category}
          </p>
          <p>
            <b>
              <u>Težina:</u>
            </b>{" "}
            {recipe.difficulty}
          </p>
          <p>
            <b>
              <u>Vreme pripreme:</u>
            </b>{" "}
            {recipe.preparation_time} min
          </p>
          <ul>
            <b>
              <u>Sastojci:</u>
            </b>
            <sup>
              *za uporedjivanje jedinica mere pogledaj odeljak
              <Link to="/tips"> saveti</Link>
            </sup>
            {recipe.ingredients.map((el) => (
              <li key={el.ingName}>
                {el.ingName} {el.quantity} {el.unit_of_measure}
              </li>
            ))}
          </ul>
          <ul>
            <b>
              <u>Način pripreme:</u>
            </b>
            {recipe.preparation_steps.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
          <section>
            <button onClick={sendRecipe}>dodaj recept</button>
            <sup>{info}</sup>
          </section>
        </div>
      </div>
    </>
  );
};
export default AddRecipe;
