import React from 'react';
import './Post.css';

const Text = (props) => (  
     <div className="card-content">
        <div className="content">
        {/* {props.textBody} */}

        
  <article class="media">
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Barbara Middleton</strong>
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
        <br></br>
        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
      </p>
    </div>
    </div>
    </article>


<article class="media-left">
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Add a comment..."></textarea>
      </p>
    </div>
    </div>
    <div class="field">
      <p class="control">
        <button class="button">Comment</button>
        <div className="clear"></div>
      </p>
    </div>
</article>
    
    </div>
     </div>
); 




export default Text;

