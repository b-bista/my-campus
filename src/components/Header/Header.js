/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div className="navbar">
            <div className="navbar-brand">
              <Link className="navbar-item">
              <img src="https://i.imgur.com/Aug55CS.png"></img>
              </Link>
              
            </div>

            <div className="navbar-menu">
              <div class="field navbar-item">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i class="fas fa-search"></i></button>
              </div>
            </div> 
            
            <div className="navbar-end">

              <Link to="/" className="navbar-item r-item">Home</Link>
              <Link to="/events" className="navbar-item r-item">Events</Link>
              <Link to="/orgs" className="navbar-item r-item">Orgs</Link>
              <Link to="/forums" className="navbar-item r-item">Forum</Link>
              
              <div className="navbar-item">
                <div className="control">
                  <Link>
                    <i class="fa fa-sign-out"></i>
                  </Link>
                </div>
              </div>
            </div> 
      </div>
  );
}

export default Header;
