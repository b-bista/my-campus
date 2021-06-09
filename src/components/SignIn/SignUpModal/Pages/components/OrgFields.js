import React, { useContext } from "react";
import { SignUpContext } from "../../SignUpModal";

export default function OrgFields(props) {
  const { state, dispatch } = useContext(SignUpContext);

  return (
    <div>
      <label>
        Organization name
        <input
          placeholder="Org Name"
          className="input is-rounded is-fullwidth"
          type="text"
          value={state && state.name}
          onChange={(e) => {
            dispatch({
              type: "ADD_ORG_INFO",
              payload: { name: e.target.value },
            });
          }}
        />
      </label>
      <label>
        About
        <input
          placeholder="About"
          className="input is-rounded is-fullwidth"
          type="text"
          value={state && state.about}
          onChange={(e) => {
            dispatch({
              type: "ADD_ORG_INFO",
              payload: { about: e.target.value },
            });
          }}
        />
      </label>
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
