/* eslint-disable */
import React, {useState} from "react";
import "./fileUpload.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Upload, message, Button, Input, Modal, Progress } from "antd";
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
            title="Upload results for Research Study 1"
            visible={modalIsOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div className="modal-subtitle">
              Upload the exported files from the simulation that are located on your
              desktop to receive your gift card
            </div>
            <Link to={'/about-studies'}>
              <div className="modal-upload-btn-wrapper">
                <Button type="primary" className="upload-btn modal-upload-btn">Upload</Button>
              </div>
            </Link>
            <Progress percent={75} />

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
