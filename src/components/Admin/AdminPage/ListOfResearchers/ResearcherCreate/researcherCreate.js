/* eslint-disable */
import React, {useState} from "react";
import { message, Button, Modal, Input } from 'antd'
import "antd/dist/antd.css";
import "./researcherCreate.css";

const ResearcherCreate = ({ modalOpen, setmodalOpen }) => {
  const deleteClick = () => {
    setmodalOpen(false);
  }
  const closeModal = () => {
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
      <Modal
        title="Create Researcher Profile"
        visible={modalOpen}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <div className="research-create-block">
          <div className="research-create__fields-wrapper">
            <p>Name</p>
            <Input placeholder="Type here.." />
          </div>
          <div className="research-create__fields-wrapper">
            <p>School/Institution Name</p>
            <Input placeholder="Type here.." />
          </div>
          <div className="research-create__fields-wrapper">
            <p>Area of Research</p>
            <Input placeholder="Type here.." />
          </div>
          <div className="research-create__changes-btns research-modal-btns">
            <Button className="research-create__save-btn" type="primary">Create</Button>
            <Button type="danger" className="research-create__cancel-btn"
              onClick={deleteClick}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
  );
};
export default ResearcherCreate;
