/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './OrgTile.css';
// import { Link } from 'react-router-dom';

function OrgTile() {
  return (  
    <div className="OrgTile">
      {/* <Link to = "/OrgPage"> */}
    <div className="card">
        <div className="media" style={{padding: "20px"}}>
            <div className="media-left">
                <figure class="image is-96x96">
                <img src="https://bulma.io/images/placeholders/96x96.png"></img>
                </figure>
            </div>
            <div className="media-content">
                <p style={{fontSize: "1vw"}}>Org Name</p>
                <p style={{fontSize: ".7vw"}}>Org description</p>
            </div> 
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default OrgTile;
