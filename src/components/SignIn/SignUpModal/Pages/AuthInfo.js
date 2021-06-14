import React, { useContext, useState } from "react";
import { SignUpContext } from "../SignUpModal";

export default function AuthInfo(props) {
  const { state, dispatch } = useContext(SignUpContext);
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <section className="modal-card-body">
      <input
        placeholder="Email"
        className="input mt-5 is-fullwidth"
        type="text"
        value={state && state.email}
        onChange={(e) => {
          dispatch({
            type: "ADD_AUTH_INFO",
            payload: { email: e.target.value },
          });
        }}
      />
      <input
        placeholder="Username"
        className="input mt-5 is-fullwidth"
        type="text"
        value={state && state.username}
        onChange={(e) => {
          dispatch({
            type: "ADD_AUTH_INFO",
            payload: { username: e.target.value },
          });
        }}
      />
      <input
        placeholder="Password"
        className="input mt-5 is-fullwidth"
        type="password"
        value={state && state.password}
        onChange={(e) => {
          dispatch({
            type: "ADD_AUTH_INFO",
            payload: { password: e.target.value },
          });
        }}
      />
      <input
        placeholder="Confirm Password"
        className="input mt-5 is-fullwidth"
        type="password"
        value={"" || confirmedPassword}
        onChange={(e) => {
          setConfirmedPassword(e.target.value);
        }}
      />
    </section>
  );
}
