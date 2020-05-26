import React, { useState } from 'react';
import './recipe.css'
import '../../App.css'

const Recipe=({recipe, setSaved})=>{
    const [all, setAll] = useState(false)
    const [info, setInfo] = useState('')

    const seeAll = () =>{
        setAll(true)
    }

    const exit = () =>{
        setAll(false)
    }

    const saveRecipe = () =>{
        setSaved(saved=>[...saved, recipe])
        setInfo('* pogledaj u sačuvanim receptima')
    }

    return(
        <div className = "recipe">
            <h2>{recipe.name}</h2>
            <p><b>Težina:</b> {recipe.difficulty}</p>
            <p><b>Vreme pripreme:</b> {recipe.preparation_time} min</p>
            <button onClick={seeAll} 
                    style={{display:all?"none":"block"}}>pogledaj recept</button>
            <div style={{display: all?"block":"none", overflow:"visible"}}>
                <ul><b>Sastojci:</b> 
                <sup>*za uporedjivanje jedinica mere pogledaj odeljak saveti</sup>
                {recipe.ingredients.map(el=>(<li key={el.ingName}>{el.ingName} {el.quantity} {el.unit_of_measure}</li>))}
                </ul>
                <ul><b>Način pripreme:</b>
                {recipe.preparation_steps.map(el=>(<li key={el}>{el}</li>))}   
                </ul>
                <button onClick={saveRecipe}>dodaj u omiljene</button>
                <sup>{info}</sup>
                <button onClick={exit}>zatvori</button>
            </div>
        </div>
    )
}
export default Recipe







