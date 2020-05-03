/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Comment() {
  return (  
    <div className="Comment">
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
            </div>
        </article>
    </div>
  );
}

export default Comment;
