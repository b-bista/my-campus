import React from 'react';
// import './OrgEvents.css';

function OrgEvents() {
  return (  
    <div className="OrgEvents">
      <div className="card">
        <div className="media" style={{padding: "20px"}}>
          <div className="media-content">
            <p style={{fontSize: "1vw"}}>Event Name</p>
            <p style={{fontSize: ".6vw"}}>Event Date</p>
            <p style={{fontSize: ".6vw"}}>Event Location</p>
            <p style={{fontSize: ".7vw"}}>Event description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrgEvents;
