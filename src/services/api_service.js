import axios from 'axios';
const url=(`http://localhost:4000/json`);

export const getRecipes = async()=>{
    return await axios.get(`${url}/recipes`)
}