import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Forum from './components/Forum/Forum';
import Events from './components/Events/Events';
import Messages from './components/Messages/Messages';
import Orgs from './components/Orgs/Orgs';
import Login from './components/Login/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
//import { Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Redirect from="/Login" to="/Home" />
        {/*
        <Route exact={true} path="/" component={Home} />
        <Route path="/Orgs" component={Orgs} />
        */}
      </Switch>
      <Footer/> 
    </div>
    </Router>
  );
}

export default App;
