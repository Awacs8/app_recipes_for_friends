import React from 'react';
import './recipe.css'

const Recipe=({recipe})=>{
    return(
        <div className = "recipe">
            <h2>{recipe.name}</h2>
            <p><b>Težina:</b> {recipe.difficulty}</p>
            <p><b>Vreme pripreme:</b> {recipe.preparation_time} min</p>
            <ul><b>Sastojci:</b> <sup>*za uporedjivanje jedinica mere pogledaj odeljak saveti</sup>
                {recipe.ingredients.map(el=>(<li key={el.name}>{el.name} {el.quantity} {el.unit_of_measure}</li>))}
            </ul>
            <ul><b>Način pripreme:</b>
                {recipe.preparation_steps.map(el=>(<li key={el}>{el}</li>))}   
            </ul>
            <button>dodaj u omiljene</button>

        </div>
    )
}
export default Recipe;







