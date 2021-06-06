import React, { useContext, useEffect } from "react";
import { SignUpContext } from "../SignUpModal";

export default function UserType(props) {
  const { state, dispatch } = useContext(SignUpContext);

  const onTypeChange = (e) => {
    dispatch({ type: "ADD_USER_TYPE", payload: e.target.value });
  };

  return (
    <section className="modal-card-body">
      <h1 className="is-medium">What type of user are you?</h1>
      <div onChange={onTypeChange}>
        <input
          type="radio"
          value="org"
          name="userType"
          checked={state && state.userType === "org"}
        />
        Organization
        <input
          type="radio"
          value="student"
          name="userType"
          checked={state && state.userType === "student"}
        />
        Student
      </div>
    </section>
  );
}
