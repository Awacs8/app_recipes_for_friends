import React from 'react'
import Recipe from './Recipe'


const Search = ({search, handleSearch}) =>{
    
    return(
        <>
        <div>
            <label>Pronadji recept:</label>
            <input onChange={handleSearch}/>
        </div>
        <div className='recipe_list'>
            {search.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
        </div>
        </>
    )
}
export default Search