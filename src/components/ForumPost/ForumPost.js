import React from 'react';
import Text from './Text.js'
import './Post.css';
import { Link } from 'react-router-dom';

// Page with all the posts populated + button to create post page. Connected to Forum page


class Post extends React.Component
{
  constructor(props) {
    super(props)

    this.addText = this.addText.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

    this.state = {
        texts: [],
        newTextBody: '',
      }
  }

  addText() {
    const newState = Object.assign({}, this.state); 
    newState.texts.push(this.state.newTextBody); 
    newState.newTextBody = ''; 
    this.setState(newState); 
  }

  handleTextChange(ev){
    this.setState({
      newTextBody: ev.target.value 
    })
  }

  render() 
  {
    return (
  
    <div className="Post">
    <section className="section">
        <div className="card is-paddingless">
          <div className="card-content">

    <div class="field is-grouped">
            <p class="control is-expanded">
            <h1 className="subtitle is-4">MyCamous Forums - (Thread Title)</h1>
            </p>
            <p class="control">
            <Link to = "/Create">
            <button class="button is-link is-hovered">Create Post</button>
              </Link>
            </p>
          </div>

            <hr></hr>
            {/* {
              this.state.texts.map((textBody, idx) => {
                return (
                  <Text key={idx} textBody = {textBody}/>
                )
              })
            }   */}

      <Text></Text>
      <Text></Text>


            </div>
            </div>
            </section>
    </div> 
  
    );
    }
}



export default Post;

