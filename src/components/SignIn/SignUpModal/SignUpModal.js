import React, { useState, createContext, useReducer, useContext } from "react";

import UserType from "./Pages/UserType";
import UserTypeInfo from "./Pages/UserTypeInfo";
import AuthInfo from "./Pages/AuthInfo";
import ProfilePic from "./Pages/ProfilePic";
import FinalScreen from "./Pages/FinalScreen";

import M from "materialize-css";

import { signUpReducer } from "../../../reducers/signUpReducer";

export const SignUpContext = createContext();

const pageMap = {
  1: UserType,
  2: UserTypeInfo,
  3: AuthInfo,
  4: ProfilePic,
  5: FinalScreen,
};

const Pages = (props) => {
  const { pageNumber, toggleActive } = props;

  const Page = pageMap[pageNumber];

  return <Page toggleActive={toggleActive} />;
};

export default function SignUpModalP2(props) {
  const [state, dispatch] = useReducer(signUpReducer, null);
  const { isActive, toggleActive } = props;

  const [pageNumber, setPageNumber] = useState(1);

  // const [userType, setUserType] = useState("");

  // //Both user types
  // const [name, setName] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // //Org specific
  // const [about, setAbout] = useState("");

  // //Student specific
  // const [gender, setGender] = useState("");

  const setActive = (e) => {
    e.preventDefault();
    toggleActive(false);
  };

  const prevPage = (e) => {
    e.preventDefault();
    if (pageNumber - 1 < 1) return;
    setPageNumber(pageNumber - 1);
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (pageNumber + 1 > 5) return;
    setPageNumber(pageNumber + 1);
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

        <SignUpContext.Provider value={{ state, dispatch }}>
          <section className="modal-card-body">
            <Pages pageNumber={pageNumber} toggleActive={toggleActive} />
          </section>
        </SignUpContext.Provider>

        <footer className="modal-card-foot">
          <button className="button is-link" onClick={prevPage}>
            Previous
          </button>
          <button className="button is-link" onClick={nextPage}>
            Next
          </button>
        </footer>
      </div>
    </div>
  );
}
