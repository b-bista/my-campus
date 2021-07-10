import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const OrgPage = () => {
  const [userProfile, setProfile] = useState(null);
  const [userPosts, setPosts] = useState([]);
  const [userEvents, setEvents] = useState([]);

  const { state, dispatch } = useContext(UserContext);
  console.log(state);
  const { orgid } = useParams();
  const [showfollow, setShowFollow] = useState(
    state && state.following.includes(orgid) ? false : true
  );
  useEffect(() => {
    fetch(
      `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/users/${orgid}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        setProfile(result);
      });

    fetch(
      `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/allposts/${orgid}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        setPosts(result);
      });

    fetch(
      `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/events/by/${orgid}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        setEvents(result);
      });
  }, []);

  const likePost = (id) => {
    fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/like`, {
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
        console.log(result);
        const newPost = userPosts.post.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setPosts(newPost);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unlikePost = (id) => {
    fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/unlike`, {
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
        //   console.log(result)
        const newData = userPosts.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setPosts(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const makeComment = (body, postId) => {
    fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/comment`, {
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
        const newPost = userPosts.post.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setPosts(newPost);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (postid) => {
    fetch(
      `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/deletepost/${postid}`,
      {
        method: "delete",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newPost = userPosts.post.filter((item) => {
          return item._id !== result._id;
        });
        setPosts(newPost);
      });
  };

  const followUser = () => {
    fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/follow`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: orgid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "UPDATE",
          payload: { following: data.following, followers: data.followers },
        });
        localStorage.setItem("user", JSON.stringify(data));
        setProfile((prevState) => {
          console.log(prevState);

          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: [prevState.user.followers, data._id],
            },
          };
        });
        setShowFollow(false);
      });
  };
  const unfollowUser = () => {
    fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/unfollow`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        unfollowId: orgid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "UPDATE",
          payload: { following: data.following, followers: data.followers },
        });
        localStorage.setItem("user", JSON.stringify(data));

        setProfile((prevState) => {
          const newFollower =
            prevState.user &&
            prevState.user.followers.filter((item) => item != data._id);
          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: newFollower,
            },
          };
        });
        setShowFollow(true);
      });
  };

  return (
    <>
      {userProfile ? (
        <div className="OrgPage">
          <div className="container">
            <section className="section">
              <div className="columns is-centered is-multiline">
                <div className="column is-one-quarter">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image">
                        <a>
                          <p className="has-text-centered">
                            {userProfile.user.name}
                          </p>
                        </a>
                        <div className="card-image">
                          <figure
                            className="image is-128x128"
                            style={{ margin: "auto" }}
                          >
                            <img
                              className="is-rounded"
                              src={userProfile.user.photo}
                            ></img>
                          </figure>
                        </div>
                        <br />
                        {showfollow ? (
                          <button
                            className="button is-rounded is-small is-fullwidth is-link"
                            onClick={() => followUser()}
                          >
                            Follow
                          </button>
                        ) : (
                          <button
                            className="button is-rounded is-small is-fullwidth is-link"
                            onClick={() => unfollowUser()}
                          >
                            Unfollow
                          </button>
                        )}
                        <br />
                        <div className="has-text-weight-bold is-uppercase">
                          <p>About</p>
                        </div>
                        <br />
                        <div className="has-text is-size-7">
                          {userProfile.user.about}
                        </div>
                        <hr></hr>
                        <div className="has-text-weight-bold is-uppercase">
                          <p>Contact Information</p>
                        </div>
                        <div className="has-text is-size-7">
                          <p>Email:</p>
                          <p>Club Suite Location:</p>
                          <p>Meeting Location:</p>
                          <p>Meeting Time:</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br></br>
                  <div className="column is-paddingless">
                    <div className="card">
                      <div className="card-content">
                        <div className="card-image">
                          <div className="has-text-weight-bold is-uppercase">
                            <p>Upcoming Events</p>
                          </div>
                          <br></br>
                          The Organization's events go here
                          {userEvents.events &&
                            userEvents.events.map((item) => {
                              return (
                                <Link to={"/events/" + item._id}>
                                  <div className="OrgEvents">
                                    <div className="card">
                                      <div
                                        className="media"
                                        style={{ padding: "20px" }}
                                      >
                                        <div className="media-content">
                                          <p style={{ fontSize: "1vw" }}>
                                            {item.name}
                                          </p>
                                          <p style={{ fontSize: ".6vw" }}>
                                            Date start {item.from}
                                          </p>
                                          <p style={{ fontSize: ".6vw" }}>
                                            {item.location}
                                          </p>
                                          <p style={{ fontSize: ".7vw" }}>
                                            {item.description}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="card-content">
                      <figure className="image is-3by1">
                        <img src={userProfile.user.banner}></img>
                      </figure>
                    </div>
                  </div>
                  <br />
                  <div className="column is-paddingless">
                    {userPosts.post &&
                      userPosts.post.map((item) => {
                        return (
                          <div
                            className="Post"
                            key={item._id}
                            style={{ marginTop: "30px" }}
                          >
                            <div className="post card">
                              <div className="card-content">
                                <div className="media">
                                  <div className="media-left">
                                    <figure className="image is-48x48">
                                      <img
                                        src={item.postedBy.photo}
                                        alt="Placeholder image"
                                      ></img>
                                    </figure>
                                  </div>

                                  <div className="media-content">
                                    {item.postedBy.userType == "org" ? (
                                      <Link to={"/orgs/" + item.postedBy._id}>
                                        {item.postedBy.name}
                                      </Link>
                                    ) : (
                                      <p>{item.postedBy.name}</p>
                                    )}
                                    <p className="date-time-posted is-paddingless">
                                      <small>Posted at {item.createdAt}</small>
                                    </p>
                                  </div>
                                </div>

                                <p className="post-content">{item.body}</p>

                                <div className="post-image card-image">
                                  <figure className="image is-4by3">
                                    <img
                                      src={item.photo}
                                      alt="Placeholder image"
                                    ></img>
                                  </figure>
                                </div>

                                <p className="post-like-count is-paddingless">
                                  {item.likes.length} likes
                                </p>
                                <footer className="card-footer">
                                  {item.likes.includes(state._id) ? (
                                    <a
                                      onClick={() => {
                                        unlikePost(item._id);
                                      }}
                                      className="card-footer-item"
                                    >
                                      Unlike<i className="fas fa-heart"></i>
                                    </a>
                                  ) : (
                                    <a
                                      onClick={() => {
                                        likePost(item._id);
                                      }}
                                      className="card-footer-item"
                                    >
                                      Like<i className="fas fa-heart"></i>
                                    </a>
                                  )}
                                  <a to="" className="card-footer-item">
                                    Comment
                                    <i className="fas fa-comment-alt"></i>
                                  </a>
                                </footer>

                                <form
                                  onSubmit={(e) => {
                                    makeComment(e.target[0].value, item._id);
                                  }}
                                  style={{ margin: "20px 0 40px 0" }}
                                >
                                  <label className="label">
                                    Post a comment
                                  </label>
                                  <div className="control">
                                    <input
                                      placeholder="Post a comment"
                                      className="input is-success is-rounded is-fullwidth"
                                      type="text"
                                    />
                                  </div>
                                </form>

                                {item.comments.map((record) => {
                                  return (
                                    <div className="Comment">
                                      <article className="media">
                                        <figure className="media-left">
                                          <p className="image is-32x32">
                                            <img
                                              src={record.postedBy.photo}
                                            ></img>
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
                      })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <h2>Loading!</h2>
      )}
    </>
  );
};

export default OrgPage;
