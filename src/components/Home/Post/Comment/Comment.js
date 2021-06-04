import React from "react";
import { Link } from "react-router-dom";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.body,
      postedBy: this.props.postedBy,
      date: this.props.date,
    };
  }

  render() {
    return (
      <div className="Comment">
        <article className="media">
          <figure className="media-left">
            <p className="image is-32x32">
              <img src="https://bulma.io/images/placeholders/128x128.png"></img>
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.state.postedBy}</strong>
                <br></br>
                {this.state.body}
                <br></br>
                <small>
                  <Link to="">Like</Link>
                  {this.state.date}
                </small>
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Comment;
