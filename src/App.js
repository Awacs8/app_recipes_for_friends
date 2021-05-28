import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import "./utils&assets/css/App.css";
import PrivateRoute from "./private/PrivateRoute";
import PublicRoute from "./public/PublicRoute";
import { Welcome } from "./public/containers/Welcome";
import Main from "./private/containers/Main";
import { Header } from "./public/components/Header";
import Footer from "./public/components/Footer";
import Navbar from "./private/components/Navbar";
import Profile from "./private/containers/Profile";
import Tips from "./private/containers/Tips";
import AddTip from "./private/components/AddTip";
import { LogIn } from "./public/components/LogIn";
import { Register } from "./public/components/Register";
import SingleRecipe from "./private/components/SingleRecipe";
import NewRecipe from "./private/containers/NewRecipe";
import SavedRecipes from "./private/components/SavedRecipes";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <PublicRoute component={LogIn} path="/login" />
          <PublicRoute component={Register} path="/register" />
          <Route component={Main} path="/main" />
          <PrivateRoute component={SingleRecipe} path="/recipe/:_id" />
          <PrivateRoute component={Tips} path="/tips" />
          <PrivateRoute component={AddTip} path="/addtip" />
          <PrivateRoute component={NewRecipe} path="/addrecipe" />
          <PrivateRoute component={Profile} path="/profile" />
          <PrivateRoute component={SavedRecipes} path="/saved" />
          <PublicRoute component={Welcome} exact path="/" />
          <Redirect from="/" to="/main" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
