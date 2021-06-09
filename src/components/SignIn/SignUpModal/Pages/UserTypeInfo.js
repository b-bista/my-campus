import React, { useContext } from "react";
import { SignUpContext } from "../SignUpModal";
import OrgFields from "./components/OrgFields";
import StudentFields from "./components/StudentFields";

export default function UserTypeInfo(props) {
  const { state, dispatch } = useContext(SignUpContext);

  return (
    <section className="modal-card-body">
      <div className="field">
        <p className="control">
          {state.userType === "org" ? <OrgFields /> : <StudentFields />}
        </p>
      </div>
    </section>
  );
}
