import React from 'react';
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
import './App.css';
import PrivateRoute from './private/PrivateRoute'
import PublicRoute from './public/PublicRoute'
import { Welcome } from './public/components/Welcome'
import Main from './private/components/Main'
import AddRecipe from './private/components/AddRecipe'
import {Header} from './public/components/Header'
import Footer from './public/components/Footer'
import Navbar from './private/components/Navbar'
import Profile from './private/components/Profile';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Navbar/>
      <Switch>
        <PublicRoute component={Welcome} exact path="/" />
        <PrivateRoute component={Main} path="/main" />
        <PrivateRoute component={AddRecipe} path="/addrecipe"/>
        <PrivateRoute component={Profile} path="/profile"/>
        {/* <Redirect from="/" to="/main" /> */}
      </Switch>
      <Footer />
    </Router>
    
    
    
    
    </>
  );
}

export default App;
