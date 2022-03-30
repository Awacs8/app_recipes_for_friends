import React, { useState, useEffect } from "react";
import "../../utils&assets/css/main.css";
import RecipeList from "../components/RecipeList";
import Select from "../components/Select";
import Search from "../components/Search";
import { getRecipes } from "../../services/api_service";
// import Pagination from "../../utils/Pagination";

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [filterByCategory, setFilterByCategory] = useState("");
  const [filterByDifficulty, setFilterByDifficulty] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage] = useState(6);

  useEffect(() => {
    getRecipes().then((response) => {
      setRecipes(response.data);
    });
  }, []);

  useEffect(() => {
    let tmp = [...recipes];
    if (searchByName) {
      tmp = tmp.filter((el) =>
        el.title.toLowerCase().includes(searchByName.toLowerCase())
      );
    }
    if (filterByCategory) {
      tmp = tmp.filter((el) => el.category === filterByCategory);
    }
    if (filterByDifficulty) {
      tmp = tmp.filter((el) => el.difficulty === filterByDifficulty);
    }
    setFiltered(tmp);
  }, [recipes, searchByName, filterByCategory, filterByDifficulty]);

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirtstItem = indexOfLastItem - itemsPerPage;
  // const currentList = recipes.slice(indexOfFirtstItem, indexOfLastItem);
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <div className="main">
      <section className="filters">
        <Select
          filterByCategory={filterByCategory}
          setFilterByCategory={setFilterByCategory}
          filterByDifficulty={filterByDifficulty}
          setFilterByDifficulty={setFilterByDifficulty}
        />
        <Search searchByName={searchByName} setSearchByName={setSearchByName} />
      </section>

      <section className="display_main">
        <RecipeList filtered={filtered} />
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
