import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Forum from './components/Forum/Forum';
import Events from './components/Events/Events';
import Messages from './components/Messages/Messages';
import Orgs from './components/Orgs/Orgs';
//import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
           
          <Route path="/" exact component={Home} />
          <Route path="/Events" component={Events} />
          <Route path="/Orgs" component={Orgs} />
          <Route path="/Forum" component={Forum} />
          <Route path="/Messages" component={Messages} />

          

        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
