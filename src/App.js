import React, {useState, useEffect} from 'react';
// import {BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
// import PrivateRoute from './private/PrivateRoute'
// import PublicRoute from './public/PublicRoute'
import { Welcome } from './public/components/Welcome'
import Main from './private/components/Main'
// import {Header} from './public/components/Header'
import Footer from './public/components/Footer'
import {getRecipes} from './services/api_service'





function App() {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        getRecipes().then(response=>{
          console.log(response.data.recipes)
          setRecipes(response.data.recipes)
          
        })
      },[])
  
  
  return (
    <>
    <Welcome />
    <Main recipes={recipes}/>
    
    <Footer />
    </>
  );
}

export default App;
