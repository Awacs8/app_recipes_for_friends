import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import PrivateRoute from './private/PrivateRoute'
import PublicRoute from './public/PublicRoute'
import { Welcome } from './public/components/Welcome'
import Main from './private/components/Main'
import AddRecipe from './private/components/AddRecipe'
import { Header } from './public/components/Header'
import Footer from './public/components/Footer'
import Navbar from './private/components/Navbar'
import Profile from './private/components/Profile'
import SavedRecipes from './private/components/SavedRecipes'

function App() {
  const [saved, setSaved] = useState([])

  useEffect(() => {
    console.log(saved)
  }, [saved])

  

  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <PrivateRoute component={Main} setSaved={setSaved} path="/main" />
          <PrivateRoute component={AddRecipe} path="/addrecipe" />
          <PrivateRoute component={Profile} path="/profile" />
          <PrivateRoute component={SavedRecipes} saved={saved} path="/saved" />
          <PublicRoute component={Welcome} exact path="/" />
          <Redirect from="/" to="/main" />
        </Switch>
        <Footer />
      </Router>




    </>
  );
}

export default App;
