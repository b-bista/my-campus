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
          <article class="media">
            <figure class="media-left is-centered">
              <p class="image is-64x64">
                <img src={state && state.photo}></img>
              </p>
              <p className="small">{state && state.name}</p>
            </figure>
            <div class="media-content">
              <div class="field">
                <p class="control">
                  <textarea
                    class="textarea"
                    value={postBody}
                    onChange={(e) => {
                      setPostBody(e.target.value);
                    }}
                    placeholder="Create a post body..."
                  ></textarea>
                </p>
              </div>
              <nav class="level">
                <div className="level-left"></div>
                <div class="level-right">
                  <div class="level-item">
                    <a
                      class="button is-info"
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
