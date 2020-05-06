import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Login from './components/Login/Login';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Forum from './components/Forum/Forum';
import Post from './components/Post/Post';
import Events from './components/Events/Events';
import EventPage from './components/EventPage/EventPage';
import Messages from './components/Messages/Messages';
import Orgs from './components/Orgs/Orgs';
// import OrgPage from './components/OrgPage/OrgPage'


function App() {
  return (
    <Router>
    <div className="App">
      <Router>
        <Header/>
          <Switch>
          <Route exact path="/" component={Login} /> 
          <Route path="/Home" component={Home} />
          <Route path="/Events" component={Events} />
          <Route path="/EventPage" component={EventPage} />
          <Route path="/Orgs" component={Orgs} />
          {/* <React path="/OrgPage" component={OrgPage}/>  */}
          <Route path="/Forum" component={Forum} />
          <Route path="/Messages" component={Messages} />
          <Route path="/Post" component={Post}/>
          
          </Switch>
        {/* <Footer/> */}
      </Router>
      
    </div>
    </Router>
  );
}

export default App;
