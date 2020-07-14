/* eslint-disable */
import React from "react";
import "./deleteModal.css";
import {Button, Modal} from "antd";

const DeleteModal = ({ deleteModalIsOpen, setDeleteModalIsOpen }) => {
  const  closeModal = () => {
    setDeleteModalIsOpen(false);
  }
  return (
    <div className="delete-block">
      <Modal
        title="Are you sure you want to delete this profile?"
        visible={deleteModalIsOpen}
        onOk={closeModal}
        onCancel={closeModal}
        className="deleteModal"
      >
      <div className="delete__btns">
        <Button onClick={closeModal}>Cancel</Button>
        <Button type="primary" onClick={closeModal}>Ok</Button>
      </div>
      </Modal>
    </div>
  )
}
export default DeleteModal;
