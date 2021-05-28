import React, { useState } from "react";

const NewRecipeForm = ({ recipe, setRecipe }) => {
  const [ingredient, setIngredient] = useState({
    ingName: "",
    quantity: "",
    unit_of_measure: "",
  });
  const [preparation_step, setPreparation_step] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setIngredient({ ...ingredient, [name]: value });
  };

  const addIngredient = (e) => {
    e.preventDefault();
    const tmp = [...recipe.ingredients, ingredient];
    setRecipe({
      ...recipe,
      ingredients: tmp,
    });
    setIngredient({
      ingName: "",
      quantity: "",
      unit_of_measure: "",
    });
  };

  const addStep = (e) => {
    e.preventDefault();
    const tmp = [...recipe.preparation_steps, preparation_step];
    setRecipe({
      ...recipe,
      preparation_steps: tmp,
    });
    setPreparation_step("");
  };

  return (
    <form>
      <label htmlFor="name">Naziv recepta: </label>
      <input
        type="text"
        name="title"
        id="name"
        value={recipe.title}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="category">Kategorija: </label>
      <select
        name="category"
        id="category"
        value={recipe.category}
        onChange={handleChange}
      >
        <option value="izaberi">izaberi...</option>
        <option value="supe/čorbe">supe/čorbe</option>
        <option value="testa/pite">testa/pite</option>
        <option value="namazi">namazi</option>
        <option value="glavna jela">glavna jela</option>
        <option value="dezerti">dezerti</option>
      </select>
      <article>
        <label htmlFor="difficulty">Težina: </label>
        <span>lako</span>
        <input
          type="radio"
          checked={recipe.difficulty === "lako"}
          value="lako"
          name="difficulty"
          onChange={handleChange}
        />
        <span>srednje</span>
        <input
          type="radio"
          checked={recipe.difficulty === "srednje"}
          value="srednje"
          name="difficulty"
          onChange={handleChange}
        />
        <span>teško</span>
        <input
          type="radio"
          checked={recipe.difficulty === "teško"}
          value="teško"
          name="difficulty"
          onChange={handleChange}
        />
      </article>
      <label htmlFor="preparation_time">Vreme pripreme (min): </label>
      <input
        type="number"
        id="preparation_time"
        name="preparation_time"
        value={recipe.preparation_time}
        onChange={handleChange}
      />
      <br />

      <label>Sastojci: </label>
      <br />
      <article>
        {/* <label htmlFor="ingName">naziv sastojka: </label> */}
        <input
          type="text"
          id="ingName"
          name="ingName"
          value={ingredient.ingName}
          onChange={handleIngChange}
          placeholder="naziv"
        />

        {/* <label htmlFor="quantity">količina: </label> */}
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={ingredient.quantity}
          onChange={handleIngChange}
          placeholder="količina"
        />

        {/* <label> jedinica mere: </label> */}
        <select
          name="unit_of_measure"
          id="unit_of_measure"
          value={ingredient.unit_of_measure}
          onChange={handleIngChange}
        >
          <option value="izaberi">jedinica mere</option>
          <option value="kom">kom</option>
          <option value="kg">kg</option>
          <option value="g">g</option>
          <option value="l">l</option>
          <option value="ml">ml</option>
          <option value="šolja">šolja</option>
          <option value="tsp (kafena kašičica)">tsp (kafena kašičica)</option>
          <option value="tbsp (supena kašika)">tbsp (supena kašika)</option>
        </select>
      </article>
      <button onClick={addIngredient}>+</button>
      <span>dodaj sastojak</span>
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
      <button onClick={addStep}>+</button>
      <span>sledeći korak</span>
      <br />
    </form>
  );
};

export default NewRecipeForm;
