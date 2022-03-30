import React from "react";
import AddIngredient from "./AddIngredient";
import AddPreparationStep from "./AddPreparationStep";

const NewRecipeForm = ({ recipe, setRecipe }) => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRecipe({ ...recipe, [name]: value });
  };

  const addIngredient = (e, ingredient) => {
    e.preventDefault();
    const tmp = [...recipe.ingredients, ingredient];
    setRecipe({
      ...recipe,
      ingredients: tmp,
    });
  };

  const addStep = (e, preparation_step) => {
    e.preventDefault();
    const tmp = [...recipe.preparation_steps, preparation_step];
    setRecipe({
      ...recipe,
      preparation_steps: tmp,
    });
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
        <option value="">izaberi...</option>
        <option value="supe/čorbe">supe/čorbe</option>
        <option value="testa/pite">testa/pite</option>
        <option value="namazi">namazi</option>
        <option value="glavna jela">glavna jela</option>
        <option value="dezerti">dezerti</option>
      </select>
      <article>
        <label>Težina: </label>
        <label htmlFor="lako">lako</label>
        <input
          type="radio"
          id="lako"
          // checked={recipe.difficulty === "lako"}
          value="lako"
          name="difficulty"
          onChange={handleChange}
        />
        <label htmlFor="srednje">srednje</label>
        <input
          type="radio"
          id="srednje"
          // checked={recipe.difficulty === "srednje"}
          value="srednje"
          name="difficulty"
          onChange={handleChange}
        />
        <label htmlFor="teško">teško</label>
        <input
          type="radio"
          id="teško"
          // checked={recipe.difficulty === "teško"}
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
      <AddIngredient addIngredient={addIngredient} />
      <ul>
        {recipe.ingredients.map((el) => (
          <li key={el.ingName} contentEditable={true}>
            {el.ingName} {el.quantity} {el.unit_of_measure}
          </li>
        ))}
      </ul>
      <AddPreparationStep addStep={addStep} />
      <ul>
        {recipe.preparation_steps.map((el) => (
          <li key={el} contentEditable={true}>
            {el}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default NewRecipeForm;
