import React, { Component } from 'react';
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
      <Header/>
        {/* 
        <Route exact={true} path="/" component={Home} />
        <Route path="/Orgs" component={Orgs} />
         */}
        

      <Footer/>
    </div>
  );
}

export default App;
