import React from 'react';
import './EventTile.css';
import { Link } from 'react-router-dom';


function EventTile() {
  return (
    <div className="EventTile">
      <Link to = "/EventPage">
      <div className="card">
        <div className="media" style={{padding: "20px"}}>
          <div className="media-content">
            <p style={{fontSize: "1vw"}}>Event Name</p>
            <p style={{fontSize: ".6vw"}}>Event Date</p>
            <p style={{fontSize: ".6vw"}}>Event Location</p>
            <p style={{fontSize: ".7vw"}}>Event description</p>
            <div className="container" style={{position: "relative"}}>
              <figure class="image is-24x24" style={{float: "left"}} >
              <img src="https://bulma.io/images/placeholders/24x24.png"></img>
              </figure>
              <p style={{fontSize: ".7vw", left: "40px"}}>Hosted by: <a>Club Name</a></p>
            </div>
          </div>
          <div className="media-right">
            <figure class="image is-128x128">
              <img src="https://bulma.io/images/placeholders/128x128.png"></img>
            </figure>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default EventTile;
