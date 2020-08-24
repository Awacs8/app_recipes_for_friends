import React from 'react'
import Recipe from './Recipe'
import '../../App.css'
import './recipe.css'

const RecipeList = ({ filtered, setSaved }) => {
    return (
        <div className='recipe_list'>
            {filtered.map(recipe => <Recipe key={recipe.id} recipe={recipe} setSaved={setSaved} />)}
        </div>
    )
}
export default RecipeList;