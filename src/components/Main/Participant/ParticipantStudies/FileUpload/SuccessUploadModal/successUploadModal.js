/* eslint-disable */
import React from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Button, Modal, Progress } from "antd";
import "./successUploadModal.css";

const SuccessUploadModal = ({ successModalIsOpen, setSuccessModalIsOpen }) => {
  const closeModal = () => {
    setSuccessModalIsOpen(false);
  };
  return (
    <Modal
      title="Upload results for Case"
      visible={successModalIsOpen}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <Progress type="circle" percent={100} />
      <div className="info-about-upload">
        Success! You will be emailed shortly your compensation for the study
      </div>
      <Link to={"/participant-studies"}>
        <div className="modal-upload-btn-wrapper">
          <Button
            type="primary"
            className="upload-btn modal-upload-btn"
            onClick={closeModal}
          >
            Close Modal
          </Button>
        </div>
      </Link>
    </Modal>
  );
};
export default SuccessUploadModal;
