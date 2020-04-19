import React from 'react';
import OrgTile from './OrgTile/OrgTile'
import './Orgs.css';

function Orgs() {
  return (
    <div className="container">
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-one-fifth">
              <div className="card">
                <div className="card-content">
                  <label className="label" style={{fontSize: "14px"}}>Filter by</label>
                  <hr></hr>
                  <label className="label" style={{fontSize: "12px"}}>Club Name</label>
                  <input type="text" placeholder="Search..." name="search"></input>
                  <hr></hr>
                  
                  <label className="label" style={{fontSize: "12px"}}>Org Categories (Select all that apply).</label>
                  <div className="columns">
                    <div className="column">
                      <label className="checkbox"><input type="checkbox"></input>Academic</label>
                      <label className="checkbox"><input type="checkbox"></input>Cultural/Identity</label>
                      <label className="checkbox"><input type="checkbox"></input>Department</label>
                      <label className="checkbox"><input type="checkbox"></input>Graduate</label>
                      <label className="checkbox"><input type="checkbox"></input>Greek</label>
                      <label className="checkbox"><input type="checkbox"></input>Honor</label>
                      <label className="checkbox"><input type="checkbox"></input>Media</label>
                      <label className="checkbox"><input type="checkbox"></input>Multi-Faith</label>
                    </div>
                    <div className="column">
                      <label className="checkbox"><input type="checkbox"></input>Performance</label>
                      <label className="checkbox"><input type="checkbox"></input>Pre-Professional</label>
                      <label className="checkbox"><input type="checkbox"></input>Recreational</label>
                      <label className="checkbox"><input type="checkbox"></input>Residence Hall</label>
                      <label className="checkbox"><input type="checkbox"></input>Service</label>
                      <label className="checkbox"><input type="checkbox"></input>Special Interest</label>
                      <label className="checkbox"><input type="checkbox"></input>Student</label>
                      <label className="checkbox"><input type="checkbox"></input>Governance</label>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="column is-three-fifths">
              <div className="card is-paddingless">
                <div className="card-content">
                  <h1 style={{fontSize: "2vw"}}>Search Current On-Campus Orgs</h1>
                  <div className="container">
                    <OrgTile/>
                    <OrgTile/>
                    <OrgTile/>
                    <OrgTile/>
                    <OrgTile/>
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

export default Orgs;
