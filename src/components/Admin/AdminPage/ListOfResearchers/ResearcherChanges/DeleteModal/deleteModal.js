/* eslint-disable */
import React from "react";
import "./deleteModal.css";
import { Button, Modal } from "antd";
import { DeleteCaseInfo, DeleteUser } from '../../../../../../modules/session/cases-reducer'
import { useDispatch } from "react-redux";

const DeleteModal = ({ deleteModalIsOpen, setDeleteModalIsOpen, id }) => {
  let dispatch = useDispatch();
  const closeModal = () => {
    setDeleteModalIsOpen(false);
    // deleteModalIsOpen=false
  };
  const deleteCase = () => {
    setDeleteModalIsOpen(false);
    // deleteModalIsOpen=false
    DeleteUser(id)(dispatch);
  };
  return (
    <div className="delete-block">
      <Modal
        title="Are you sure?"
        visible={deleteModalIsOpen}
        onOk={closeModal}
        onCancel={closeModal}
        className="deleteModal"
      >
        <div className="delete__btns">
          <Button onClick={closeModal}>Cancel</Button>
          <Button type="primary" onClick={deleteCase}>
            Ok
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default DeleteModal;
