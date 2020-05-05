import React from 'react';
import OrgPost from './OrgPost/OrgPost.js';
import OrgEvents from './OrgEvents/OrgEvents.js';

function OrgPage() {
  return (
    <div className="OrgPage">
      <div className="container">
        <section className="section">

          <div className="columns is-centered is-multiline">
            <div className="column is-one-quarter">
              <div className="card">
                <div className="card-content">
                  <div className="card-image">
                    <a><p className="has-text-centered">Organization Name</p></a>
                    <div className="card-image">
                      <figure className="image is-128x128" style={{margin: "auto"}}>
                        <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></img>
                      </figure>
                    </div>
                    <br/>
                    <button className="button is-rounded is-small is-fullwidth is-link">Follow Us</button>
                    <br/>
                    <button className="button is-rounded is-small is-fullwidth is-link">Become A Member</button>
                    <hr></hr>
                    <div class="has-text-weight-bold is-uppercase">
                      <p>About</p>
                    </div>
                    <br/>
                    <div class="has-text is-size-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    </div>
                    <hr></hr>
                    <div class="has-text-weight-bold is-uppercase">
                      <p>Contact Information</p>
                    </div>
                    <div class="has-text is-size-7">
                      <p>Email:</p>
                      <p>Club Suite Location:</p>
                      <p>Meeting Location:</p>
                      <p>Meeting Time:</p>
                    </div>
                  </div>
                </div>
              </div>

              <br></br>
              <div className="column is-paddingless">
              <div className="card">
                <div className="card-content">
                  <div className="card-image">
                    <div class="has-text-weight-bold is-uppercase">
                      <p>Upcoming Events</p>
                    </div>
                    <br></br>
                    <OrgEvents/>
                    <br></br>
                    <OrgEvents/>
                  </div>
                </div>
              </div>
              </div>

            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                    <figure className="image is-3by1">
                      <img src="https://bulma.io/images/placeholders/1280x960.png"></img>
                    </figure>
                </div>
                </div>
              <br/>
              <div className="column is-paddingless">
                <div className="card">
                  <OrgPost/>
                  <br></br>
                  <OrgPost/>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default OrgPage;
