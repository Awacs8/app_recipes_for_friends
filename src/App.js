import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
// import PrivateRoute from './private/PrivateRoute'
// import PublicRoute from './public/PublicRoute'
import { Welcome } from './public/components/Welcome'
import Main from './private/components/Main'
import AddRecipe from './private/components/AddRecipe'
import {Header} from './public/components/Header'
import Footer from './public/components/Footer'
// import {getRecipes} from './services/api_service'
// import { getAllUsers } from './services/auth_service'
import Navbar from './private/components/Navbar'
import Profile from './private/components/Profile';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Navbar/>
      <Switch>
        <Route component={Welcome} exact path="/" />
        <Route component={Main} path="/main" />
        <Route component={AddRecipe} path="/addrecipe"/>
        <Route component={Profile} path="/profile"/>
      </Switch>
      <Footer />
    </Router>
    
    
    
    
    </>
  );
}

export default App;
