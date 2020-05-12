import axios from 'axios';
const url=(`http://localhost:4000/api`);

export const getRecipes = async()=>{
    return await axios.get(`${url}/recipes`)
}