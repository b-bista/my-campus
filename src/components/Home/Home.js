import React, { useState, useEffect, useContext } from "react";
import Post from "./Post/Post";
import { NotificationManager } from "react-notifications";
import CreatePostBox from "./Post/CreatePostBox/CreatePostBox";
import { UserContext } from "../../App";
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
        pic: "https://thumbs.dreamstime.com/z/abstract-poster-event-template-fluid-shapes-composition-modern-event-poster-template-futuristic-design-posters-liquid-color-152203412.jpg",
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        if (data.error) {
          NotificationManager.warning(
            "Your post was not created.",
            "Something went wrong",
            3000
          );
        } else {
          console.log("Your post was successfully created!");
          let newData = data.slice();
          newData.unshift(post.post);

          setData(newData);

          NotificationManager.success(
            "Your post was successfully created!",
            "Post Created",
            3000
          );
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
            <div className="column is-half">
              {state && state.userType === "org" && (
                <CreatePostBox createPost={createPost} />
              )}

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
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
