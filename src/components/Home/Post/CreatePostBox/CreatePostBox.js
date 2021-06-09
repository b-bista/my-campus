import React, { useState, useContext } from "react";
import { UserContext } from "../../../../App";

export default function CreatePostBox(props) {
  const [postBody, setPostBody] = useState("");
  const { state, dispatch } = useContext(UserContext);
  const { createPost } = props;

  return (
    <div className="Post" style={{ marginTop: "30px" }}>
      <div className="post card">
        <div className="card-content">
          <article className="media">
            <figure className="media-left has-text-centered">
              <p className="image is-64x64">
                <img src={state && state.photo}></img>
              </p>
              <p className="small">{state && state.name}</p>
            </figure>
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea
                    className="textarea"
                    value={postBody}
                    onChange={(e) => {
                      setPostBody(e.target.value);
                    }}
                    placeholder="Start typing..."
                  ></textarea>
                </p>
              </div>
              <nav className="level">
                <div className="level-left"></div>
                <div className="level-right">
                  <div className="level-item">
                    <a
                      className="button is-link"
                      onClick={(e) => {
                        e.preventDefault();
                        createPost(postBody);
                      }}
                    >
                      Create Post
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
