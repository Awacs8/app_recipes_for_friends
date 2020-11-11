import axios from "axios";
// const url1 = `http://localhost:4000/api`;
const url = `https://recipes-for-friends-api.herokuapp.com/api`;

export const getRecipes = async () => {
  return await axios.get(`${url}/recipes`);
};

export const sendRecipes = async (recipe) => {
  return await axios.post(`${url}/recipes`, recipe);
};

// export const saveRecipe = async (recipe) => {
//   return await axios.post(`${url1}/users/:id/saved_recipes`, recipe);
// };
// export const savedRecipes = async () => {
//   return await axios.get(`${url1}/users/:id/saved_recipes`);
// };
