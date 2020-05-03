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
              <div class="field navbar-item">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i class="fas fa-search"></i></button>
              </div>
            </div>

            <div className="navbar-menu">
              <div className="navbar-end">
                <Link to="/Home" className="navbar-item r-item">Home</Link>
                <Link to="/Events" className="navbar-item r-item">Events</Link>
                <Link to="/Orgs" className="navbar-item r-item">Orgs</Link>
                <Link to="/Forum" className="navbar-item r-item">Forum</Link>
                <Link to="/Messages" className="navbar-item r-item">Messages</Link>

                <div className="navbar-item">
                  <div className="control">
                    <Link>
                      <i class="fa fa-sort-down"></i>
                    </Link>
                  </div>
                </div>
              </div> 
            </div> 
      </div>
  );
}

export default Header;
