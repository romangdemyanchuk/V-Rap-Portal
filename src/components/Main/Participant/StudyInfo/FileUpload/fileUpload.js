/* eslint-disable */
import React, {useState} from "react";
import "./fileUpload.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Upload, message, Button, Input, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const FileUpload = () => {
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
            title="Basic Modal"
            visible={modalIsOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>

        {/*<div className="upload-title">*/}
        {/*  You are submitting files for "Study 1"*/}
        {/*</div>*/}
        {/*<div className="upload-subtitle">*/}
        {/*  Upload the exported files from the simulation that are located on your*/}
        {/*  desktop to receive your giftcard*/}
        {/*</div>*/}
        {/*<div className="file-upload">*/}
        {/*  <Input placeholder="File upload" />*/}
        {/*  <Upload {...props} className="uploadd-btn">*/}
        {/*    <Button>*/}
        {/*      <UploadOutlined /> Choose*/}
        {/*    </Button>*/}
        {/*  </Upload>*/}
        {/*</div>*/}
        {/*<Link to={"/about-studies"}>*/}
        {/*  <Button className="choose-button">Submit</Button>*/}
        {/*</Link>*/}

      </div>
    </div>
  );
};
export default FileUpload;
