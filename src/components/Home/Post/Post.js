import React, { useContext, useRef } from "react";
import Comment from "./Comment/Comment";
import { timeAgo } from "../../../miscHelperFunctions/helperFunctions";
import { UserContext } from "../../../App";
import "./Post.css";

import { Link } from "react-router-dom";

const Post = (props) => {
  const { postData, likePost, unlikePost, deletePost, makeComment } = props;
  const { state, dispatch } = useContext(UserContext);

  const commentRef = useRef(null);

  const relativeTime = timeAgo(postData.createdAt);

  return (
    <div className="Post" key={postData._id} style={{ marginTop: "30px" }}>
      <div className="post card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src={postData.postedBy.photo}
                  alt="Placeholder image"
                ></img>
              </figure>
            </div>

            <div className="media-content">
              {postData.postedBy.userType == "org" ? (
                <Link to={"/orgs/" + postData.postedBy._id}>
                  {postData.postedBy.name}
                </Link>
              ) : (
                <p>{postData.postedBy.name}</p>
              )}
              <p className="date-time-posted is-paddingless">
                <small>Posted {relativeTime}</small>
              </p>
            </div>
            {postData.postedBy._id === state._id && (
              <div className="media-right">
                <button
                  className="delete"
                  onClick={(e) => {
                    e.preventDefault();
                    deletePost(postData._id);
                  }}
                ></button>
              </div>
            )}
          </div>

          <p className="post-content">{postData.body}</p>

          <div className="post-image card-image">
            <figure className="image is-4by3">
              <img src={postData.photo} alt="Placeholder image"></img>
            </figure>
          </div>

          <p className="post-like-count is-paddingless">
            {postData.likes.length} likes
          </p>
          <footer className="card-footer">
            {postData.likes.includes(state._id) ? (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  unlikePost(postData._id);
                }}
                className="card-footer-item"
              >
                Unlike<i className="fas fa-heart"></i>
              </a>
            ) : (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  likePost(postData._id);
                }}
                className="card-footer-item"
              >
                Like<i className="fas fa-heart"></i>
              </a>
            )}

            <a
              className="card-footer-item"
              onClick={(e) => {
                e.preventDefault();
                commentRef.current.focus();
              }}
            >
              Comment<i className="fas fa-comment-alt"></i>
            </a>
          </footer>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              makeComment(e.target[0].value, postData._id);
            }}
            style={{ margin: "20px 0 40px 0" }}
          >
            <label className="label">Post a comment</label>
            <div className="control">
              <input
                ref={commentRef}
                placeholder="Post a comment"
                className="input is-success is-rounded is-fullwidth"
                type="text"
              />
            </div>
          </form>

          {postData.comments.map((record) => {
            return (
              <div className="Comment">
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-32x32">
                      <img src={record.postedBy.photo}></img>
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        {record.postedBy.name}
                        <br></br>
                        {record.body}
                        <br></br>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
