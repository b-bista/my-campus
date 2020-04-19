import React from 'react';
import Post from './Post/Post.js';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <section className="section">
          <div class="columns">

            <div className="column"></div>
            
            <div className="column is-two-fifths">
              <br></br>
              <Post/>
              <br></br>
              <Post/>
              <br></br>
              <Post/>
              <br></br>
              <Post/>
            </div>
            
            <div className="column"></div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
