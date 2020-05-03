import React from 'react';

const Text = (props) => (  
    <div className="Text">
        <div className="panel panel-default forum-body">
            <div className="panel-body">
             {props.textBody}
            </div>
        </div>
    </div>
  );

export default Text;
