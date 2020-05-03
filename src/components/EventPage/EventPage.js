import React from 'react';
import './EventPage.css';

function EventPage() {
  return (
    <div className="EventPage">
      <div className="container">
        <section className="section">
          <div className="columns is-centered">
            
            <div className="column is-three-fifths">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="">General Interest Meeting #1</p>
                      <p className=""><small>Date: (date)</small></p>
                      <p className=""><small>Address: (Address)</small></p>
                    </div>

                    <div className="media-right">
                      <button className="button is-rounded is-small">Going (12)</button><button className="button is-rounded is-small">Interested (34)</button>
                    </div>
                  </div>

                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
                    </figure>
                  </div>

                  <p className="post-content">Still court no small think death so an wrote. Incommode necessary no it behavior convinced distrusts an unfeeling he. 
                  Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age. Avoid for see marry sorry child. 
                  Sitting so totally forbade hundred to. </p>

                  <p>Event Tags:</p>

                  <span className="button is-static is-rounded is-small">Tag 1</span>
                  <span className="button is-static is-rounded is-small">Tag 2</span>
                  <span className="button is-static is-rounded is-small">Tag 3</span>


                </div>
              </div>
            </div>

            <div className="column is-one-fifth">
              <div className="card is-paddingless">
                <div className="card-content">

                  <a><p className="has-text-centered">Organization Name</p></a>
                  <div className="card-image">
                    <figure className="image is-128x128" style={{margin: "auto"}}>
                      <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></img>
                    </figure>
                  </div>
                  <p className="has-text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

                  <div class="has-text-centered">
                    <button className="button is-rounded has-text-centered" style={{margin: "auto"}}>View full profile</button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default EventPage;
