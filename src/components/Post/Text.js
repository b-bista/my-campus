import React from 'react';
import './Post.css';

const Text = (props) => (  
<div className="card">  
    <div className="card-content">
        <div className="content">
        {props.textBody}
        </div>
    </div>
</div>
); 

export default Text;

