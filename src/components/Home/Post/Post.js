import React from 'react';
import axios from 'axios';
import Comment from './Comment/Comment';
import './Post.css';
import { Link } from 'react-router-dom';

class Post extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      body: this.props.body,
      photo: this.props.photo,
      postedBy: this.props.postedBy,
      date: this.props.date
    };
  }
  
  /*componentDidMount() {
    axios.get('http://localhost:6000/posts/')
      .then(response => {
        this.setState({ body: this.props.body,
          photo: this.props.photo,
          body: this.props.postedby
         })
      })
      .catch((error) => {
        console.log(error);
      })
  }*/

  render(){
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
                <a class="user-name is-paddingless">{this.state.postedBy}</a>
                <p class="date-time-posted is-paddingless"><small>Posted at {this.state.date}</small></p>
              </div>
            </div>
  
            <p class="post-content">{this.state.body}</p>
  
            
  
            <div className="post-image card-image">
              <figure className="image is-4by3">
                <img src={this.state.photo} alt="Placeholder image"></img>
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
  
}

export default Post;
