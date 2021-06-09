import React, { useContext } from "react";
import { SignUpContext } from "../../SignUpModal";

export default function StudentFields(props) {
  const { state, dispatch } = useContext(SignUpContext);

  return (
    <div>
      <label>
        Full name
        <input
          placeholder="Full Name"
          className="input is-rounded is-fullwidth"
          type="text"
          value={state && state.name}
          onChange={(e) => {
            dispatch({
              type: "ADD_STUDENT_INFO",
              payload: { name: e.target.value },
            });
          }}
        />
      </label>
      <div
        onChange={(e) => {
          dispatch({
            type: "ADD_STUDENT_INFO",
            payload: { gender: e.target.value },
          });
        }}
      >
        Please select your gender:
        <div>
          <label>
            Male
            <input
              type="radio"
              value="male"
              name="gender"
              checked={state && state.gender === "male"}
            />
          </label>
          <label>
            {" "}
            Female
            <input
              type="radio"
              value="female"
              name="gender"
              checked={state && state.gender === "female"}
            />
          </label>
          <label>
            {" "}
            Other
            <input
              type="radio"
              value="other"
              name="gender"
              checked={state && state.gender === "other"}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
