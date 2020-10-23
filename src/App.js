import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./private/PrivateRoute";
import PublicRoute from "./public/PublicRoute";
import { Welcome } from "./public/components/Welcome";
import Main from "./private/components/Main";
import AddRecipe from "./private/components/AddRecipe";
import { Header } from "./public/components/Header";
import Footer from "./public/components/Footer";
import Navbar from "./private/components/Navbar";
import Profile from "./private/components/Profile";
import SavedRecipes from "./private/components/SavedRecipes";
import Tips from "./private/components/Tips";

function App() {
  // const [saved, setSaved] = useState([]);

  // useEffect(() => {
  //   console.log(saved);
  // }, [saved]);

  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <PrivateRoute component={Main} path="/main" />
          <PrivateRoute component={Tips} path="/tips" />
          <PrivateRoute component={AddRecipe} path="/addrecipe" />
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
