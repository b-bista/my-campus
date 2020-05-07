import React from 'react';
import './Post.css';


// Page to create posts. connected to post page. 


class Create extends React.Component
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
      <div className="create">
    <section className="section">
        <div className="card is-paddingless">
          <div className="card-content">
            <h1 className="subtitle is-4">Create Post</h1>
            <div className="container">
            <form> 

                  
        <div class="field">
          <label class="label">Post Title</label>
          <div class="control">
            <input class="input" type="text"></input>
          </div>
        </div>


      <label class="label">Post Body</label>
      <div class="control">
        <textarea className="textarea is-hovered" value={this.state.newTextBody} onChange={this.handleTextChange}/>
        <button className="button is-link is-hovered post_btn" onClick= {this.addText}>Post</button>
        <div className="clear"></div>  
      </div>
              </form>
            </div>
          </div>
      </div>
  </section>
  </div> 
  

    );
    }
}




export default Create;
