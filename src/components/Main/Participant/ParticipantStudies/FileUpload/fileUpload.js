/* eslint-disable */
import React, {useState} from "react";
import {message, Button, Modal, Progress } from "antd";
import AboutStudies from './AboutStudies'
import "./fileUpload.css";
import "antd/dist/antd.css";

const FileUpload = ({modalOpen, setmodalOpen}) => {
  const [successModalIsOpen, setsuccessModalIsOpen] = useState(false);
  const uploadClick = () => {
    setmodalOpen(false);
    setsuccessModalIsOpen(true)
  }
  const  closeModal = e => {
    setmodalOpen(false);
  }
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      console.log(1);
      if (info.file.status !== "uploading") {
        setmodalOpen(false);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div>
      <AboutStudies successModalIsOpen={successModalIsOpen} setsuccessModalIsOpen={setsuccessModalIsOpen}/>
      <div>
        <Modal
          title="Upload results for Research Study 1"
          visible={modalOpen}
          onOk={closeModal}
          onCancel={closeModal}
        >
          <div className="modal-subtitle">
            Upload the exported files from the simulation that are located on your
            desktop to receive your gift card
          </div>
          <div className="modal-upload-btn-wrapper">
            <Button type="primary" className="upload-btn modal-upload-btn"
                    onClick={uploadClick}>Upload</Button>
          </div>
          <Progress percent={75} />
        </Modal>
      </div>
    </div>
  );
};
export default FileUpload;
