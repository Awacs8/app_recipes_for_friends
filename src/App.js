import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import PrivateRoute from './private/PrivateRoute'
import PublicRoute from './public/PublicRoute'
import { Welcome } from './public/components/Welcome'
import Main from './private/components/Main'
import {Header} from './public/components/Header'
import Footer from './public/components/Footer'



function App() {
  return (
    <>
    <Header />
    <Router>
      <Switch>
        <PublicRoute component={Welcome} path="/welcome"/>
        <PrivateRoute component={Main} path="/main"/>
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
