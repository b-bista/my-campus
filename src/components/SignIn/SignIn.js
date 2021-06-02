import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import "./SignIn.css";

const SignIn = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const PostData = () => {
    fetch("http://localhost:4000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div class="form">
      <form class="user">
        <a id="pic">
          <img src="https://i.imgur.com/Aug55CS.png" class="logo"></img>
        </a>
        <p class="space">
          <input
            placeholder="Username"
            class="input is-success is-rounded is-fullwidth"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p class="space">
          <input
            placeholder="Password"
            class="input is-rounded is-fullwidth"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p class="space">
          <button
            class="button is-link is-medium is-overlay is-rounded is-centered"
            onClick={(e) => {
              e.preventDefault();
              PostData();
            }}
          >
            Sign In
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
