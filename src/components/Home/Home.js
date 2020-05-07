import React from 'react';
import Post from './Post/Post.js';
import './Home.css';
import axios from 'axios';


class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {posts: []};
  }

  componentDidMount() {
    axios.get('http://localhost:6000/posts/')
      .then(response => {
        this.setState({ posts: response.data })
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  postList() {
    return this.state.posts.map(currentpost => {
      return <Post body={currentpost[1]} photo={currentpost[2]} postedBy={"random"}/>;
    })
  }

  render(){
    return (
      <div className="home">
        <div className="container">
          <section className="section">
            <div class="columns">
  
              <div className="column"></div>
              
              <div className="column is-two-fifths">
                
                { this.postList() }
                <br></br>
              </div>
              
              <div className="column"></div>
  
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
