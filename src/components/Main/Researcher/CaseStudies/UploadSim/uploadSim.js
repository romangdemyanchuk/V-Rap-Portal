/* eslint-disable */
import React from "react";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import uploadImage from "../../../../../images/uploadImage.jpg";
import "./uploadSim.css";

const UploadSim = () => {
  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div className="upload-title">Upload Sim Here:</div>
        <div className="uploadImage">
          <img src={uploadImage} alt={uploadImage} />
        </div>
        <Input placeholder="Title" className="upload-title" />
        <Input placeholder="Description" className="upload-descr" />
        <Input
          placeholder="Readset Required (Rift S, TC Vive)"
          className="upload-redSet"
        />
        <Input
          placeholder="Readset Required (Rift S, TC Vive)"
          className="upload-redSet"
        />
        <Link to={"/personal-stats"}>
          <Button className="upload-btn">Launch</Button>
        </Link>
      </div>
    </div>
  );
};
export default UploadSim;
