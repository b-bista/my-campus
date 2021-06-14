import React, { useContext } from "react";
import { SignUpContext } from "../../SignUpModal";

export default function OrgFields(props) {
  const { state, dispatch } = useContext(SignUpContext);

  console.log(state);

  return (
    <div>
      <input
        placeholder="Organization Name"
        className="input is-fullwidth"
        type="text"
        value={state && state.name}
        onChange={(e) => {
          dispatch({
            type: "ADD_ORG_INFO",
            payload: { name: e.target.value },
          });
        }}
      />

      <textarea
        className="textarea"
        text="text"
        value={state && state.about}
        onChange={(e) => {
          dispatch({
            type: "ADD_ORG_INFO",
            payload: { about: e.target.value },
          });
        }}
        placeholder="Tell us about your org..."
      ></textarea>

      {/* <input
        placeholder="About"
        className="input is-medium is-rounded is-fullwidth"
        type="text"
        value={state && state.about}
        onChange={(e) => {
          dispatch({
            type: "ADD_ORG_INFO",
            payload: { about: e.target.value },
          });
        }}
      /> */}
    </div>
  );
}
