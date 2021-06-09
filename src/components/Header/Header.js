/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const { state, dispatch } = useContext(UserContext);
  const [burgerActive, setBurgerActive] = useState(false);
  const history = useHistory();

  if (state)
    return (
      <div className="navbar is-link is-fixed-top">
        <div className="navbar-brand">
          <a
            onClick={() => {
              setBurgerActive(!burgerActive);
            }}
            role="button"
            className={`navbar-burger burger ${
              burgerActive ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <Link to="/" className="navbar-item">
            <img src="https://i.imgur.com/Aug55CS.png"></img>
          </Link>
        </div>

        <div className={`navbar-menu ${burgerActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <div className="field navbar-item">
              <input type="text" placeholder="Search.." name="search"></input>
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          <div className="navbar-end">
            <Link to="/" className="navbar-item r-item">
              Home
            </Link>
            <Link to="/events" className="navbar-item r-item">
              Events
            </Link>
            <Link to="/orgs" className="navbar-item r-item">
              Orgs
            </Link>
            <Link to="/forums" className="navbar-item r-item">
              Forum
            </Link>
            <Link
              className="navbar-item r-item"
              onClick={() => {
                localStorage.clear();
                dispatch({ type: "CLEAR" });
                history.push("/signin");
              }}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    );
  else return null;
}

export default Header;
