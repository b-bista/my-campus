import React from 'react';
import EventTile from './EventTile/EventTile'
import './Events.css';

function Events() {
  return (
    <div className="Events">
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-one-fifth">
              <div className="card">
                <div className="card-content">
                  <label className="label" style={{_fontSize: "14px",
get fontSize() {
                      return this._fontSize;
                    },
set fontSize(value) {
                      this._fontSize = value;
                    },
}}>Filter by</label>
                  <hr></hr>
                  <label className="label" style={{fontSize: "12px"}}>Date</label>
                  <div className="container">
                    <label className="label">From <input type="text" placeholder="mm/dd/yy" name="search"></input></label>
                    <label className="label is-left">To <input type="text" className ="is-right" placeholder="mm/dd/yy" name="search"></input></label>
                  </div>
                  <hr></hr>
                  
                  <label className="label" style={{fontSize: "12px"}}>Event Categories (Select all that apply).</label>
                  <div className="columns">
                    <div className="column">
                      <label className="checkbox"><input type="checkbox"></input>Arts & Music</label>
                      <label className="checkbox"><input type="checkbox"></input>Service</label>
                      <label className="checkbox"><input type="checkbox"></input>Cultural</label>
                      <label className="checkbox"><input type="checkbox"></input>Business</label>
                      <label className="checkbox"><input type="checkbox"></input>Civic Engagement</label>
                      <label className="checkbox"><input type="checkbox"></input>Professional</label>
                      <label className="checkbox"><input type="checkbox"></input>Interpersonal</label>
                    </div>
                    <div className="column">
                      <label className="checkbox"><input type="checkbox"></input>Social</label>
                      <label className="checkbox"><input type="checkbox"></input>Spirituality</label>
                      <label className="checkbox"><input type="checkbox"></input>Learning</label>
                      <label className="checkbox"><input type="checkbox"></input>Interest Meeting</label>
                      <label className="checkbox"><input type="checkbox"></input>Professional</label>
                      <label className="checkbox"><input type="checkbox"></input>Intercultural</label>
                    </div>
                  </div>

                  <hr></hr>

                  <label className="label" style={{fontSize: "12px"}}>Club Name</label>
                  <input type="text" placeholder="Search..." name="search"></input>

                </div>
              </div>
            </div>
            <div className="column is-three-fifths">
              <div className="card is-paddingless">
                <div className="card-content">
                  <h1 style={{fontSize: "2vw"}}>Search Current On-Campus Events</h1>
                  <div className="container">
                    <EventTile/>
                    <EventTile/>
                    <EventTile/>
                    <EventTile/>
                    <EventTile/>
                  </div>
                </div>
              </div>
            </div>
            <div className="column"></div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Events;
