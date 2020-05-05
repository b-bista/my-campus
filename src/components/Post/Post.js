import React from 'react';
import './Post.css';

const Post = (props) => (  
  <div className="Post">
  <section className="section">
      <div className="card is-paddingless">
        <div className="card-content">
          <div className="container">


{/* Card should be part of Post component -> another folder */}
            <div className="card">  
              <div className="card-content">
                <div className="content">
                  Post: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                </div>
              </div>
           </div>

           <div className="card">  
              <div className="card-content">
                <div className="content">
                  Post: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                </div>
              </div>
           </div>

                <div className="card-content">
            <textarea className="textarea is-hovered" placeholder="Enter Text Here...."></textarea>
            <button className="button is-link is-hovered post_btn">Post</button>
            <div className="clear"></div>
          </div>
          </div>
        </div>
    </div>
</section>
</div> 

  );


export default Post;
