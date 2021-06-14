import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import S3FileUpload from "react-s3";
import config from "./config.json";

const UploadImage = (props) => {
  const { setPath } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileLoading, setFileLoading] = useState("Please upload your file.");

  const handleImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadImage = () => {
    setFileLoading("Attemping to upload file...");
    S3FileUpload.uploadFile(selectedFile, config)
      .then((data) => {
        setPath(data.location);
        setFileLoading("File uploaded!");
        NotificationManager.success("Upload complete!", 3000);
      })
      .catch((err) => {
        NotificationManager.error("File could not be uploaded", 3000);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={uploadImage}>Upload!</button>
      <p>{fileLoading}</p>
    </div>
  );
};

export default UploadImage;
