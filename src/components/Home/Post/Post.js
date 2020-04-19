import React from 'react';
import Comment from './Comment/Comment';
import './Post.css';
import { Link } from 'react-router-dom';

function Post() {
  return (
    <div className="Post">
      <div className="post card">
        <div className="card-content">
          
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></img>
              </figure>
            </div>

            <div class="media-content">
              <a class="user-name is-paddingless">User Name</a>
              <p class="date-time-posted is-paddingless"><small>Posted (date-time-posted) ago</small></p>
            </div>
          </div>

          <p class="post-content">Still court no small think death so an wrote. Incommode necessary no it behavior convinced distrusts an unfeeling he. Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally forbade hundred to. </p>

          

          <div className="post-image card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
            </figure>
          </div>

          
          <p className="post-like-count is-paddingless">X likes</p>
          <footer className="card-footer">
            <Link to="" className="card-footer-item">Like<i class="fas fa-heart"></i></Link>
            <Link to="" className="card-footer-item">Comment<i class="fas fa-comment-alt"></i></Link>
          </footer>

          
          <Comment></Comment>
        </div>
      </div>
    </div>
  );
}

export default Post;
