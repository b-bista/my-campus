import React from "react";

export default function UserTypeInfo(props) {
  const { setUserType } = props;

  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input
          placeholder="Full Name"
          className="input is-medium is-rounded is-fullwidth"
          type="text"
          value={"username"}
          onChange={(e) => setUserType(e.target.value)}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-id-card"></i>
        </span>
      </p>
    </div>
  );
}
