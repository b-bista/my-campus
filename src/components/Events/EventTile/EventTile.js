import React from 'react';
import './EventTile.css';

function EventTile() {
  return (  
    <div className="EventTile">
      <div className="card">
        <div className="media">
          <div className="media-content">
            <p style={{fontSize: "1vw"}}>Event Name</p>
            <p style={{fontSize: ".6vw"}}>Event Date</p>
            <p style={{fontSize: ".6vw"}}>Event Location</p>
            <p style={{fontSize: ".7vw"}}>Event description</p>
            <div className="container">
              <figure class="image is-24x24">
              <img src="https://bulma.io/images/placeholders/24x24.png"></img>
              </figure>
              <p style={{fontSize: ".7vw"}}>Hosted by: Club Name</p>
            </div>
          </div>
          <div className="media-right">
            <figure class="image is-128x128">
              <img src="https://bulma.io/images/placeholders/128x128.png"></img>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventTile;
