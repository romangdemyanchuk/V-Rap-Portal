/* eslint-disable */
import React from "react";
import "./aboutStudies.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import {message, Button, Modal, Progress } from "antd";

const AboutStudies = ({ successModalIsOpen, setsuccessModalIsOpen }) => {
  const  closeModal = e => {
    setsuccessModalIsOpen(false);
  }
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
      <Modal
        title="Upload results for Research Study 1"
        visible={successModalIsOpen}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <Progress type="circle" percent={100} />
        <div className="info-about-upload">
          Success! You will be emailed shortly your compensation for the study
        </div>
        <Link to={'/participant-studies'}>
          <div className="modal-upload-btn-wrapper">
            <Button type="primary" className="upload-btn modal-upload-btn"
            onClick={closeModal}>Close Modal</Button>
          </div>
        </Link>
      </Modal>
  );
};
export default AboutStudies;
