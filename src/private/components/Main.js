import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import Select from "./Select";
import Search from "./Search";
import SavedRecipes from "./SavedRecipes";
import { getRecipes } from "../../services/api_service";

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [saved, setSaved] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getRecipes().then((response) => {
      setRecipes(response.data.recipes);
    });
  }, []);

  useEffect(() => {
    setFiltered(recipes);
  }, [recipes]);

  const handleChange = (e) => {
    e.preventDefault();
    let selectedValue = e.target.value;
    let tmp = [...recipes];
    const selected = tmp.filter((el) => el.difficulty === selectedValue);
    selectedValue === "izaberi" ? setFiltered(recipes) : setFiltered(selected);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let search = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(search);
  };

  const handleClick = (recipe) => {
    setSaved([...saved, recipe]);
    console.log(saved);
  };

  return (
    <div className="main">
      <Select handleChange={handleChange} />
      <Search handleSearch={handleSearch} />
      <button
        style={{ opacity: saved.length > 0 ? "1" : "0.6" }}
        onClick={() => setShow(!show)}
      >
        Sačuvani recepti
      </button>
      {show && <SavedRecipes saved={saved} />}
      <RecipeList filtered={filtered} handleClick={handleClick} />
    </div>
  );
};

export default Main;
