import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import Select from './Select';
import Search from './Search';
import { getRecipes } from '../../services/api_service';


const Main = ({ setSaved }) => {
    const [recipes, setRecipes] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        getRecipes().then(response => {
            setRecipes(response.data.recipes)
        })
    }, [])

    useEffect(() => {
        setFiltered(recipes)
    }, [recipes])

    const handleChange = (e) => {
        let selectedValue = e.target.value
        let tmp = [...recipes]
        const selected = tmp.filter(el => el.difficulty === selectedValue)
        selectedValue === 'izaberi' ? setFiltered(recipes) : setFiltered(selected)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        let search = recipes.filter(recipe => recipe.name.toLowerCase()
            .includes(e.target.value.toLowerCase()))
        setFiltered(search)
    }

    return (
        <div className='main'>
            <Select handleChange={handleChange} />
            <Search handleSearch={handleSearch} />
            <RecipeList filtered={filtered} setSaved={setSaved} />
        </div>
    )
}

export default Main;