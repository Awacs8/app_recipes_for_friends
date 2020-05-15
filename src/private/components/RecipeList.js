import React from 'react'
import Recipe from  './Recipe'

const RecipeList = ({recipes}) =>{
    return(
        <div className='recipe_list'>
            {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
        </div>
    )
}
export default RecipeList;