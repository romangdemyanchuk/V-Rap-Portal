/* eslint-disable */
import React from "react";
import "./deleteModal.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import {message, Button, Modal, Progress } from "antd";

const DeleteModal = ({ deleteModalIsOpen, setDeleteModalIsOpen }) => {
  const  closeModal = e => {
    setDeleteModalIsOpen(false);
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
    <div className="delete-block">
      <Modal
        title="Are you sure you want to delete this profile?"
        visible={deleteModalIsOpen}
        onOk={closeModal}
        onCancel={closeModal}
        className="deleteModal"
      >
       <div className="delete-btns">
         <Link to={'/all-studies-list'}>
          <Button>Cancel</Button>
         </Link>
         <Button type="primary">Ok</Button>
       </div>
      </Modal>
    </div>
  );
};
export default DeleteModal;
