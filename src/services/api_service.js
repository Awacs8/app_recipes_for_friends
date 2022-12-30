import axios from "axios";
// const url = `http://localhost:4000/api`;
const url = `https://recipes-for-friends-api.onrender.com/api`;

export const getRecipes = async () => {
  return await axios.get(`${url}/recipes`);
};

export const getRecipeById = async (recipeId) => {
  return await axios.get(`${url}/recipes/${recipeId}`);
};

export const sendRecipes = async (recipe) => {
  return await axios.post(`${url}/recipes`, recipe);
};

export const getTips = async () => {
  return await axios.get(`${url}/tips`);
};

export const sendTips = async (tip) => {
  return await axios.post(`${url}/tips`, tip);
};

export const saveRecipe = async (userId, recipe) => {
  return await axios.put(`${url}/users/${userId}`, recipe);
};

export const removeSavedRecipe = async (userId, recipe) => {
  return await axios.delete(`${url}/users/${userId}`, {
    data: { recipe: recipe },
  });
};
