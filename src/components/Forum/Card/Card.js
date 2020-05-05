import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = (props) => (  
    <div className="postcard">
      <div className="card">
        {/* Should load from the back end based on posts*/}
          <Link to = "/Post">
            <p className="card-header-title">Thread Topic</p>
          </Link>
        <div className="card-content">
          <div className="content">
            Description by thread admin 
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <hr></hr>
            {/* # of posts should so be compiled by backend*/}
           <p>Posts: 100</p>
          </div>
        </div>
      </div>
  </div>
    );
export default Card;
