import React from 'react';

const AddRecipe = () =>{
    return(
        <div className='add_recipe'>
            <label>Naziv recepta: </label>
            <input type='text' /><br/>
            <label>Kategorija: </label>
            <select>
                <option>Supe/čorbe</option>
                <option>Testa/pite</option>
                <option>Namazi</option>
                <option>Glavna jela</option>
                <option>Dezerti</option>
            </select><br/>
            <label>Težina: </label>

            <input type='radio' value='lako' name='težina'/>
            <label>lako</label>
            <input type='radio' value='srednje' name='težina'/>
            <label>srednje</label>
            <input type='radio' value='teško' name='težina'/>
            <label>teško</label><br/>
            <label>Vreme pripreme (min): </label>
            <input type='number' /><br/>
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
            <textarea /><br/>
            <button>dodaj sledeći korak</button>
        </div>
    )
}
export default AddRecipe