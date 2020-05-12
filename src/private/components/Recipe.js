import React from 'react';
import '../../App.css'

const Recipe=({recipe})=>{
    return(
        <div className = "recipe">
            <h3>Naziv recepta: {recipe.name}</h3>
            <p>Tezina: {recipe.difficulty}</p>
            <p>Vreme pripreme: {recipe.preparation_time} min</p>
            <ul>Sastojci:
                {recipe.ingredients.map(el=>(<li>{el.name} {el.quantity} {el.unit_of_measure}</li>))}
            </ul>
            <ul>Nacin pripreme:
                {recipe.preparation_steps.map(el=>(<li>{el}</li>))}   
            </ul>

        </div>
    )
}
export default Recipe;







