/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      body: this.props.body,
      postedBy: this.props.postedBy,
      date: this.props.date,
    };
  }

  render(){
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
              </div>
          </article>
      </div>
    );
  }
}

export default Comment;
