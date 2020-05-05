import React from 'react';
import Card from './Card/Card.js';
import './Forum.css';

const Forum = (props) => (  
  <div className="forum">
  
    <section className="section">
          <div className="card is-paddingless">
            <div className="card-content">
              <h1 className="subtitle is-4"> MyCampus Forums</h1>
              <div className="container">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </div>
            </div>
        </div>
    </section>
</div>
  


 
  );


export default Forum;





