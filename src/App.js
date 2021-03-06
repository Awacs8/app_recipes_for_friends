import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./private/PrivateRoute";
import PublicRoute from "./public/PublicRoute";
import { Welcome } from "./public/containers/Welcome";
import Main from "./private/containers/Main";
import AddRecipe from "./private/containers/AddRecipe";
import { Header } from "./public/components/Header";
import Footer from "./public/components/Footer";
import Navbar from "./private/components/Navbar";
import Profile from "./private/containers/Profile";
import Tips from "./private/containers/Tips";
import AddTip from "./private/components/AddTip";
import { LogIn } from "./public/components/LogIn";
import { Register } from "./public/components/Register";
import SingleRecipe from "./private/components/SingleRecipe";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <PublicRoute component={LogIn} path="/login" />
          <PublicRoute component={Register} path="/register" />
          <PrivateRoute component={Main} path="/main" />
          <PrivateRoute component={SingleRecipe} path="/recipe/:_id" />
          <PrivateRoute component={Tips} path="/tips" />
          <PrivateRoute component={AddTip} path="/addtip" />
          <PrivateRoute component={AddRecipe} path="/addrecipe" />
          <PrivateRoute component={Profile} path="/profile" />
          <PublicRoute component={Welcome} exact path="/" />
          <Redirect from="/" to="/main" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
