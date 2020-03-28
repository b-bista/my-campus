import React from 'react';
import './Header.css';

function Header() {
  return (
      <div className="navbar">
            <div className="navbar-brand">
              <a className="navbar-item">
              <img src="https://i.imgur.com/Aug55CS.png"></img>
              </a>
              <div class="field navbar-item">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i class="fa fa-search"></i></button>
              </div>
                  
            </div>

            <div className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item r-item">Home</a>
                <a className="navbar-item r-item">Events</a>
                <a className="navbar-item r-item">Orgs</a>
                <a className="navbar-item r-item">Forum</a>
                <a className="navbar-item r-item">Messages</a>

                <div className="navbar-item">
                  <div className="control">
                    <a>
                      <i class="fa fa-sort-down"></i>
                    </a>
                  </div>
                </div>
              </div> 
            </div> 
      </div>
  );
}

export default Header;
