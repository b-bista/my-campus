import React, { useState, useEffect, useContext } from "react";
import Post from "./Post/Post";
import M from "materialize-css";
import CreatePostBox from "./Post/CreatePostBox/CreatePostBox";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import "./Post/Post.css";

const Home = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/allposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);

  const createPost = (postBody) => {
    fetch("http://localhost:4000/createpost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        body: postBody,
        pic:
          "https://thumbs.dreamstime.com/z/abstract-poster-event-template-fluid-shapes-composition-modern-event-poster-template-futuristic-design-posters-liquid-color-152203412.jpg",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          console.log("WTF");
          M.toast({
            html: "Created post successfully",
            classes: "#43a047 green darken-1",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (postid) => {
    fetch(`http://localhost:4000/deletepost/${postid}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.filter((item) => {
          return item._id !== result._id;
        });
        setData(newData);
      });
  };

  const likePost = (id) => {
    fetch("http://localhost:4000/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unlikePost = (id) => {
    fetch("http://localhost:4000/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const makeComment = (body, postId) => {
    fetch("http://localhost:4000/comment", {
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
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home">
      <div className="container">
        <section className="section">
          <div className="columns is-centered">
            <div className="column is-two-fifths">
              <CreatePostBox createPost={createPost} />
              {data.map((item) => {
                return (
                  <Post
                    postData={item}
                    likePost={likePost}
                    unlikePost={unlikePost}
                    makeComment={makeComment}
                    deletePost={deletePost}
                  />
                );

                // return (
                //   <div
                //     className="Post"
                //     key={item._id}
                //     style={{ marginTop: "30px" }}
                //   >
                //     <div className="post card">
                //       <div className="card-content">
                //         <div class="media">
                //           <div class="media-left">
                //             <figure class="image is-48x48">
                //               <img
                //                 src={item.postedBy.photo}
                //                 alt="Placeholder image"
                //               ></img>
                //             </figure>
                //           </div>

                //           <div class="media-content">
                //             {item.postedBy.userType == "org" ? (
                //               <Link to={"/orgs/" + item.postedBy._id}>
                //                 {item.postedBy.name}
                //               </Link>
                //             ) : (
                //               <p>{item.postedBy.name}</p>
                //             )}
                //             <p class="date-time-posted is-paddingless">
                //               <small>Posted {relativeTime}</small>
                //             </p>
                //           </div>
                //         </div>

                //         <p class="post-content">{item.body}</p>

                //         <div className="post-image card-image">
                //           <figure className="image is-4by3">
                //             <img src={item.photo} alt="Placeholder image"></img>
                //           </figure>
                //         </div>

                //         <p className="post-like-count is-paddingless">
                //           {item.likes.length} likes
                //         </p>
                //         <footer className="card-footer">
                //           {item.likes.includes(state._id) ? (
                //             <a
                //               onClick={(e) => {
                //                 e.preventDefault();
                //                 unlikePost(item._id);
                //               }}
                //               className="card-footer-item"
                //             >
                //               Unlike<i class="fas fa-heart"></i>
                //             </a>
                //           ) : (
                //             <a
                //               onClick={(e) => {
                //                 e.preventDefault();
                //                 likePost(item._id);
                //               }}
                //               className="card-footer-item"
                //             >
                //               Like<i class="fas fa-heart"></i>
                //             </a>
                //           )}

                //           <a to="" className="card-footer-item">
                //             Comment<i class="fas fa-comment-alt"></i>
                //           </a>
                //         </footer>

                //         <form
                //           onSubmit={(e) => {
                //             makeComment(e.target[0].value, item._id);
                //           }}
                //           style={{ margin: "20px 0 40px 0" }}
                //         >
                //           <label class="label">Post a comment</label>
                //           <div class="control">
                //             <input
                //               placeholder="Post a comment"
                //               class="input is-success is-rounded is-fullwidth"
                //               type="text"
                //             />
                //           </div>
                //         </form>

                //         {item.comments.map((record) => {
                //           return (
                //             <div className="Comment">
                //               <article class="media">
                //                 <figure class="media-left">
                //                   <p class="image is-32x32">
                //                     <img src={record.postedBy.photo}></img>
                //                   </p>
                //                 </figure>
                //                 <div class="media-content">
                //                   <div class="content">
                //                     <p>
                //                       {record.postedBy.name}
                //                       <br></br>
                //                       {record.body}
                //                       <br></br>
                //                     </p>
                //                   </div>
                //                 </div>
                //               </article>
                //             </div>
                //           );
                //         })}
                //       </div>
                //     </div>
                //   </div>
                // );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
