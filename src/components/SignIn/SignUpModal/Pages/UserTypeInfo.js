import React, { useContext } from "react";
import { SignUpContext } from "../SignUpModal";

export default function UserTypeInfo(props) {
  const { state, dispatch } = useContext(SignUpContext);

  return (
    <section className="modal-card-body">
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            placeholder="Full Name"
            className="input is-medium is-rounded is-fullwidth"
            type="text"
            value={(state && state.name) || "Full Name"}
            onChange={(e) => {
              dispatch({
                type: "ADD_ORG_TYPE",
                payload: { name: e.target.value, gender: "Male" },
              });
              console.log(state.name);
            }}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-id-card"></i>
          </span>
        </p>
      </div>
    </section>
  );
}
