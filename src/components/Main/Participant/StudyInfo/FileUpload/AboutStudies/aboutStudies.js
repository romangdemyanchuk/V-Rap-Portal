/* eslint-disable */
import React, {useState} from "react";
import "./aboutStudies.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Upload, message, Button, Input, Modal, Progress } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const AboutStudies = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(true);
  const showModal = () => {
    this.setState({
      visible: true,
    });
  };

  const handleOk = e => {
    console.log(e);
    setmodalIsOpen(false);
  };

  const handleCancel = e => {
    console.log(e);
    setmodalIsOpen(false);
  };
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div>
          <Modal
            title="Upload results for Research Study 1"
            visible={modalIsOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Progress type="circle" percent={100} />
            <div className="info-about-upload">
              Success! You will be emailed shortly your compensation for the study
            </div>
            <Link to={'/study-info'}>
              <div className="modal-upload-btn-wrapper">
                <Button type="primary" className="upload-btn modal-upload-btn">Close Modal</Button>
              </div>
            </Link>

          </Modal>
        </div>

      </div>
    </div>
  );
};
export default AboutStudies;
