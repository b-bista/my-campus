import React, { useState } from "react";

import UserType from "./Pages/UserType";
import UserTypeInfo from "./Pages/UserTypeInfo";
import AuthInfo from "./Pages/AuthInfo";
import ProfilePic from "./Pages/ProfilePic";
import FinalScreen from "./Pages/FinalScreen";

// const pageMap = {
//   1: <UserType setUserType={setUserType}/>,
//   2: <UserTypeInfo setName={setName} />,
//   3: AuthInfo,
//   4: ProfilePic,
//   5: FinalScreen,
// }

// const Pages = (props) => {
//   const { pageNumber } = props;

//   const Page = pageMap[pageNumber];

//   return <Page />
// };

export default function SignUpModalP2(props) {
  const { isActive, toggleActive } = props;

  const [pageNumber, setPageNumber] = useState(1);

  const [userType, setUserType] = useState("");

  //Both user types
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Org specific
  const [about, setAbout] = useState("");

  //Student specific
  const [gender, setGender] = useState("");

  const setActive = (e) => {
    e.preventDefault();
    toggleActive(false);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create an account</p>
          <button
            className="delete"
            aria-label="close"
            onClick={setActive}
          ></button>
        </header>
      </div>
    </div>
  );
}
