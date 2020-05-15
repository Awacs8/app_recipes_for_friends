import React from 'react'
import Recipe from './Recipe'

const Select = ({selected, handleChange}) =>{

    return (
        <div>
            <label>Prikaži po kategorijama</label>
            <select onChange={handleChange}>
                <option value='izaberi'>svi recepti</option>
                <option value='lako'>lako</option>
                <option value='srednje'>srednje</option>
                <option value='teško'>tesko</option>
            </select>
            <div className='recipe_list'>
            {selected.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
            </div>
        </div>
    )

}

export default Select