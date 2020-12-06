import axios from "axios";
// const url1 = `http://localhost:4000/api`;
const url = `https://recipes-for-friends-api.herokuapp.com/api`;

export const getRecipes = async () => {
  return await axios.get(`${url}/recipes`);
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

export const saveRecipe = async (id, recipe) => {
  return await axios.put(`${url}/users/${id}`, recipe);
};

export const removeSavedRecipe = async (id, recipe) => {
  return await axios.delete(`${url}/users/${id}`, { data: { recipe } });
};
