import axios from "axios";
// const url = `http://localhost:4000/api`;
const url = `https://recipes-for-friends-api.onrender.com/api`;

export const registerUser = async (user) => {
  return await axios.post(`${url}/users`, user);
};

export const logIn = async (username, password) => {
  return await axios.post(`${url}/users/login`, { username, password });
};

export const getAllUsers = async () => {
  return await axios.get(`${url}/users`);
};

export const getUserById = async (_id) => {
  return await axios.get(`${url}/users/${_id}`);
};

export const deleteUser = () => {
  return new Promise((resolve) => {
    state.token = null;
    state._id = null;
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    resolve();
  });
};

//auth
let state = {
  token: null,
  id: null,
};

export const setToken = (token) => {
  state.token = token;
  localStorage.setItem("token", token);
};

export const setId = (_id) => {
  state._id = _id;
  localStorage.setItem("_id", _id);
};

export const getId = () => {
  const _id = state._id
    ? state._id
    : localStorage.getItem("_id")
    ? localStorage.getItem("_id")
    : null;
  return _id;
};

export const getToken = () => {
  const token = state.token
    ? state.token
    : localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  return token;
};

export const isLogIn = () => {
  return state.token || localStorage.getItem("token");
};
