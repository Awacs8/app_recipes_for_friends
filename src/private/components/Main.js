import React, {useState,useEffect} from 'react';
import RecipeList from './RecipeList';
import Select from './Select';
import Search from './Search';
import {getRecipes} from '../../services/api_service'


const Main=({setSaved})=>{
const [recipes, setRecipes] = useState([]);
const [selected, setSelected] = useState([])
const [search, setSearch] = useState([])

useEffect(()=>{
    getRecipes().then(response=>{
      // console.log(response.data.recipes)
      setRecipes(response.data.recipes)
    })
  },[])

    const  handleChange = (e) =>{
            e.preventDefault();
            let selValue=e.target.value
            if(selValue==='izaberi'){
                setSelected([])
            }else{
                const selected=recipes.filter(el=>el.difficulty===selValue)
                setSelected(selected)
            }
            
    }
    const handleSearch = (e) =>{
        e.preventDefault();
        if(e.target.value===''){
            setSearch([])
        }else{
            const search=recipes.filter(recipe=>recipe.name.toLowerCase()
        .includes(e.target.value.toLowerCase()))
        setSearch(search)
        }
    }
    // console.log(selected)

// useEffect(()=>{
//     let id=getId();
//     getUserById(id).then(res =>{
//         setUser(res.data.user);
//     });
// },[])
// console.log(user)

    return(
        <div className='main'>
            <Select handleChange={handleChange} selected={selected} setSaved={setSaved}/>
            <Search search={search} handleSearch={handleSearch} setSaved={setSaved} />
            <RecipeList recipes={recipes} setSaved={setSaved}/>
        </div>
    )
}

export default Main;