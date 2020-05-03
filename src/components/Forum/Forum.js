import React from 'react';
import Text from './Text/Text.js';
import './Forum.css';

class Forum extends React.Component 
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
        <div>
            {
              this.state.texts.map((textBody, idx) => {
                return (
                  <Text key={idx} textBody = {textBody}/>
                )
              })
            }


          <div className= "panel panel-default forum-editor">
            <div className= "panel-body">
            <textarea className="form-control forum-editor-input" value={this.state.newTextBody} onChange={this.handleTextChange}/>
              <button className= "btn btn-outline-primary forum-editor-button" onClick= {this.addText}> Submit </button>
            </div>     
          </div>
        </div>
    );
  }
}

export default Forum;





