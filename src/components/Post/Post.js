import React from 'react';
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

          
          <article class="media">
            <figure class="media-left">
              <p class="image is-32x32">
                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
              </p>
            </figure>
            <div class="media-content">
              <div class="field">
                <p class="control">
                  <textarea class="textarea" placeholder="Add a comment..."></textarea>
                </p>
                <button class="button is-small">Post comment</button>
              </div>
            </div>
          </article>

          <article class="media">
            <figure class="media-left">
              <p class="image is-32x32">
                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
              </p>
            </figure>
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

              <article class="media">
                <figure class="media-left">
                  <p class="image is-24x24">
                    <img src="https://bulma.io/images/placeholders/96x96.png"></img>
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Sean Brown</strong>
                      <br></br>
                      Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                      <br></br>
                      <small><a>Like</a> · 2 hrs</small>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <figure class="media-left">
                  <p class="image is-24x24">
                    <img src="https://bulma.io/images/placeholders/96x96.png"></img>
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Kayli Eunice </strong>
                      <br></br>
                      Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                      <br></br>
                      <small><a>Like</a> · 2 hrs</small>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Post;
