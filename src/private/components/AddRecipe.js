import React, { useState } from 'react';

const AddRecipe = () =>{
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [preparation_time, setPreparation_time] = useState('')
    // const [ingredients, setIngredients]=([])
    const [preparation_steps, setPreparation_steps]=useState([])
    const [preparation_step, setPreparation_step]=useState('')
    
    
    
    let recipe={
        name: name,
        category: category,
        difficulty: difficulty,
        preparation_time: preparation_time,
        preparation_steps: preparation_steps
        // ingredients: [
            //     // {
                //     //     name: name,
                //     //     quantity: quantity,
                //     //     unit_of_measure: unit_of_measure
                //     // }
                // ],
                
    }
            
    const addStep = (e) =>{
        e.preventDefault()
        preparation_steps.push(preparation_step)
        // console.log(preparation_step)
        setPreparation_steps(preparation_steps)
        // console.log(preparation_steps)
    }
    

    const sendRecipe = () =>{
        console.log(recipe)
        // window.location.reload()
    }

    return(
        <>
        <h2>Popuni formu i podeli recept sa nama</h2>

        <div className="add">
        <div className='add_recipe'>
            <label>Naziv recepta: </label>
            <input type='text' onInput={(e)=>setName(e.target.value)}/><br/>
            <label>Kategorija: </label>
            <select onChange={(e)=>setCategory(e.target.value)}>
                <option>Supe/čorbe</option>
                <option>Testa/pite</option>
                <option>Namazi</option>
                <option>Glavna jela</option>
                <option>Dezerti</option>
            </select><br/>
            <label>Težina: </label>
            <input type='radio' value='lako' name='težina' 
            onClick={(e)=>setDifficulty(e.target.value)}/>
            <label>lako</label>
            <input type='radio' value='srednje' name='težina'
            onClick={(e)=>setDifficulty(e.target.value)}/>
            <label>srednje</label>
            <input type='radio' value='teško' name='težina'
            onClick={(e)=>setDifficulty(e.target.value)}/>
            <label>teško</label><br/>
            <label>Vreme pripreme (min): </label>
            <input type='number' onInput={(e)=>setPreparation_time(e.target.value)}/><br/>
            <label>Sastojci: </label><br/>
            <label>naziv sastojka: </label>
            <input type='text' /><br/>
            <label> količina: </label>
            <input type='text' /><br/>
            <label> jedinica mere: </label>
            <select>
                <option>kom</option>
                <option>kg</option>
                <option>g</option>
                <option>l</option>
                <option>ml</option>
                <option>šolja</option>
                <option>tsp (kafena kašićica)</option>
                <option>tbsp (supena kašika)</option>
            </select><br/>
            <button>dodaj sledeći sastojak</button><br/>
            <label>Koraci: </label><br/>
            <input type='text' onInput={(e)=>setPreparation_step(e.target.value)}/><br/>
            <button onClick={addStep}>dodaj sledeći korak</button><br/>
            <button onClick={sendRecipe}>dodaj recept</button>
        </div>
        <div className="recipe_view">
            <h3>Pregled recepta</h3>
            <h2>{recipe.name}</h2>
            <p><b>Kategorija: </b>{recipe.category}</p>
            <p><b>Težina:</b> {recipe.difficulty}</p>
            <p><b>Vreme pripreme:</b> {recipe.preparation_time} min</p>
                {/* <ul><b>Sastojci:</b> 
                <sup>*za uporedjivanje jedinica mere pogledaj odeljak saveti</sup>
                {recipe.ingredients.map(el=>(<li key={el.name}>{el.name} {el.quantity} {el.unit_of_measure}</li>))}
                </ul> */}
                <ul><b>Način pripreme:</b>
                {recipe.preparation_steps.map(el=>(<li key={el}>{el}</li>))}   
                </ul>
        </div>
        </div>
        </>
    )
}
export default AddRecipe