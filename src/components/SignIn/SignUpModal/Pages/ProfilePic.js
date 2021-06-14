import React, { useContext, useState } from "react";
import UploadImage from "../../../ImageUploader/UploadImage";
import { SignUpContext } from "../SignUpModal";

export default function ProfilePic(props) {
  const { state, dispatch } = useContext(SignUpContext);
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const setPicturePath = (path) => {
    dispatch({
      type: "ADD_PIC",
      payload: path,
    });
  };

  return (
    <div>
      <h1>Upload a profile picture</h1>
      <UploadImage setPath={setPicturePath} />
    </div>
  );
}
