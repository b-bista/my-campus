import React from "react";

export default function UserType(props) {
  const { setUserType } = props;

  return (
    <div>
      <section className="modal-card-body">
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
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Sign Up</button>
        <button className="button" onClick={"setActive"}>
          Cancel
        </button>
      </footer>
    </div>
  );
}
