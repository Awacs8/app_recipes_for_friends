import axios from 'axios';
// const url=(`http://localhost:4000/api`);
const url=(`https://recipes-for-friends-api.herokuapp.com/api`)


export const getRecipes = async()=>{
    return await axios.get(`${url}/recipes`)
}