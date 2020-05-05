import React from 'react';
import Text from './Text.js'
import './Post.css';

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
            <h1 className="subtitle is-4">Thread Topic</h1>
            <div className="container">
            {
              this.state.texts.map((textBody, idx) => {
                return (
                  <Text key={idx} textBody = {textBody}/>
                )
              })
            }  
            <textarea className="textarea is-hovered"value={this.state.newTextBody} onChange={this.handleTextChange}/>
              <button className="button is-link is-hovered post_btn" onClick= {this.addText}>Post</button>
              <div className="clear"></div>
            
            </div>
          </div>
      </div>
  </section>
  </div> 
  
    );
    }
}



export default Post;

