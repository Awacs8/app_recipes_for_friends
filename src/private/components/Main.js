import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import Select from "./Select";
import Search from "./Search";
import SavedRecipes from "./SavedRecipes";
import { getRecipes } from "../../services/api_service";
// import Pagination from "../../utils/Pagination";

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [saved, setSaved] = useState([]);
  const [show, setShow] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage] = useState(6);

  useEffect(() => {
    getRecipes().then((response) => {
      setRecipes(response.data.recipes);
    });
  }, []);

  // useEffect(() => {
  //   savedRecipes().then((response) => {
  //     console.log(response.data.savedRecipes);
  //     setSaved(response.data.savedRecipes);
  //   });
  // }, []);

  useEffect(() => {
    setFiltered(recipes);
    // console.log(JSON.stringify(recipes));
  }, [recipes]);

  const handleChange = (e) => {
    e.preventDefault();
    let selectedValue = e.target.value;
    let tmp = [...recipes];
    const selected = tmp.filter(
      (el) =>
        el.difficulty === selectedValue ||
        el.category.toLowerCase() === selectedValue
    );
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
    // saveRecipe(recipe).then(() => {
    //   console.log(recipe);
    // });
    setSaved([...saved, recipe]);
    console.log(saved);
  };

  const uniqueSaved = [...new Set(saved)];

  const removeRecipe = (recipe) => {
    let save = saved.filter((el) => el.id !== recipe.id);
    setSaved(save);
  };

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirtstItem = indexOfLastItem - itemsPerPage;
  // const currentList = recipes.slice(indexOfFirtstItem, indexOfLastItem);
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <div className="main">
      <section className="nav_main">
        <Select handleChange={handleChange} />
        <Search handleSearch={handleSearch} />
        <button
          style={{ opacity: uniqueSaved.length > 0 ? "1" : "0.6" }}
          onClick={() => setShow(!show)}
        >
          Sačuvani recepti ({uniqueSaved.length})
        </button>
      </section>
      {show && (
        <SavedRecipes uniqueSaved={uniqueSaved} removeRecipe={removeRecipe} />
      )}
      <section className="display_main">
        <RecipeList filtered={filtered} handleClick={handleClick} />
      </section>
      {/* <Pagination
        paginate={paginate}
        totalItems={filtered.length}
        itemsPerPage={itemsPerPage}
      /> */}
    </div>
  );
};

export default Main;
