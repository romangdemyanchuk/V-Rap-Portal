/* eslint-disable */
import React, {useState} from "react";
import { message, Button, Modal, Input } from 'antd'
import DeleteModal from './DeleteModal'
import "./ResearchersEdit.css";
import "antd/dist/antd.css";

const ResearcherChanges = ({ modalOpen, setmodalOpen }) => {
  const deleteClick = () => {
    setmodalOpen(false);
    setDeleteModalIsOpen(true)
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
      <Modal
        title="Admins Changes"
        visible={modalOpen}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <div className="research-changes">
          <div className="changes-modal__fields-wrapper">
            <p>Name</p>
            <Input placeholder="Type here.." />
          </div>
          <div className="changes-modal__fields-wrapper">
            <p>School/Institution Name</p>
            <Input placeholder="Type here.." />
          </div>
          <div className="changes-modal__fields-wrapper">
            <p>Area of Research</p>
            <Input placeholder="Type here.." />
          </div>
          <div className="changes-modal__changes-btns research-modal-btns">
            <Button className="save-btn" type="primary">Save</Button>
            <Button type="danger" className="cancel-btn"
              onClick={deleteClick}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ResearcherChanges;
