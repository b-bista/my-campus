import React from 'react';
import './OrgTile.css';

function OrgTile() {
  return (  
    <div className="OrgTile">
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
    </div>
  );
}

export default OrgTile;
