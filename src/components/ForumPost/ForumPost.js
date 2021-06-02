import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ForumPost.css";

const ForumPost = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const { postid } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/forumposts/${postid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPost(result);
        console.log(post);
      });
  }, []);

  const makeComment = (body, postId) => {
    fetch("http://localhost:4000/commentForum", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId,
        body,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newComments = comments.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setComments(newComments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="forum">
      <section
        className="section"
        style={{ backgroundColor: "#E7EAF1", height: "100vh" }}
      >
        <div className="columns is-centered">
          <div className="column is-four-fifths">
            <div className="card is-paddingless">
              <div className="card-content">
                <h1 className="subtitle is-4"> MyCampus Forums</h1>
                <div className="container">
                  <div className="postcard">
                    <article class="media">
                      <div class="media-content">
                        <div class="content">
                          <p>
                            <strong>{post.posts && post.posts.title}</strong>
                          </p>
                          <p>{post.posts && post.posts.description}</p>
                          <p>
                            Posted by: {post.posts && post.posts.postedBy.name}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>

              <div className="card">
                <form
                  onSubmit={(e) => {
                    makeComment(
                      e.target[0].value,
                      post.posts && post.posts._id
                    );
                  }}
                  style={{ margin: "20px 0 40px 0" }}
                >
                  <label class="label">Post a comment</label>
                  <div class="control">
                    <input
                      placeholder="Post a comment"
                      class="input is-success is-rounded is-fullwidth"
                      type="text"
                    />
                  </div>
                </form>
              </div>

              {post.posts &&
                post.posts.comments.map((record) => {
                  return (
                    <div className="Comment">
                      <article class="media">
                        <figure class="media-left">
                          <p class="image is-32x32">
                            <img src={record.postedBy.photo}></img>
                          </p>
                        </figure>
                        <div class="media-content">
                          <div class="content">
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
      </section>
    </div>
  );
};

export default ForumPost;
