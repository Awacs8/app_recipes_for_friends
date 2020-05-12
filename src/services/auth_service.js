import axios from 'axios';
const url=(`http://localhost:4000/api`);


export const registerUser = async (user) => {
    return await axios.put(`${url}/users/register`, user)
}
export const logIn = async (username, password)=>{
    return await axios.post(`${url}/users/login`, {username, password})
}
export const getAllUsers = async () => {
    return await axios.get(`${url}/users`)
}
export const getUserById = async (user_id) => {
    return await axios.get(`${url}/users/${user_id}`)
}
export const setToken = (token) => {
    state.token = token;
    localStorage.setItem('token',token);
}
let state = {
    token: null,
    id: null
}
export const setId = (id) => {
    state.id = id;
    localStorage.setItem('id',id)
}
export const getId=()=>{
    const id = state.id ? state.id :
    localStorage.getItem('id') ? localStorage.getItem('id')
    : null;
    return id
}
export const getToken = () => {
    const token = state.token ? state.token : 
    localStorage.getItem('token') ? localStorage.getItem('token') 
    : null ;

    return token
}
export const isLogIn=()=>{
    return state.token || localStorage.getItem('token')
}
export const deleteUser = () => {
    return new Promise (resolve => {
        state.token = null;
        state.id = null
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        resolve();
    })
}