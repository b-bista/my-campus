import React, { useState, useContext } from "react";
import SignUpModal from "./SignUpModal/SignUpModal";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const SignIn = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [signUpActive, setSignUpActive] = useState(false);

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
    <div className="container">
      {signUpActive && <SignUpModal toggleActive={setSignUpActive} />}
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-two-fifths">
            <div class="card" style={{ padding: "4em 0 4em 0" }}>
              <div className="card-content has-text-centered">
                <h1 class="title">MyCampus</h1>
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input
                      placeholder="Username"
                      class="input is-rounded is-fullwidth"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input
                      placeholder="Password"
                      class="input is-rounded is-fullwidth"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>

                <button
                  class="button is-rounded is-link"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    PostData();
                  }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    PostData();
                  }}
                >
                  Sign In
                </button>

                <div style={{ marginTop: "2em" }}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setSignUpActive(true);
                    }}
                  >
                    New user? Click here to sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
