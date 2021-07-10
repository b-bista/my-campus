import React, { useState, useEffect, useContext } from "react";
import { NotificationManager } from "react-notifications";
import { SignUpContext } from "../SignUpModal";
import { useHistory } from "react-router-dom";

export default function FinalScreen(props) {
  const [isCreatingAccount, setIsCreatingAccount] = useState(true);
  const { state, dispatch } = useContext(SignUpContext);
  const history = useHistory();
  let reqBody = "";

  useEffect(() => {
    // if (state.userType === "org") {
    // }

    console.log(state);

    reqBody = JSON.stringify({
      name: state.name,
      photo: state.profilePic,
      username: state.username,
      email: state.email,
      password: state.password,
      userType: state.userType,
    });

    signUp();
  }, []);

  const signUp = () => {
    fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: reqBody,
    })
      .then((res) => res.json())
      .then((data) => {
        setIsCreatingAccount(true);
        dispatch({ type: "CLEAR" });
        NotificationManager.success(
          "You have been successfully created an account. Please log in.",
          3000
        );
        props.toggleActive();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return isCreatingAccount ? (
    <h1>Creating your account...</h1>
  ) : (
    <h1>Your account has been created!</h1>
  );
}
