/* eslint-disable */
import React from "react";
import "./deleteModal.css";
import { Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import { DeleteCaseInfo } from '../../../../../modules/session/cases-reducer'

const DeleteCaseModal = ({ deleteModalIsOpen, setDeleteModalIsOpen, id }) => {
  let dispatch = useDispatch();
  const closeModal = () => {
    setDeleteModalIsOpen(false);
  };
  const deleteCase = () => {
    setDeleteModalIsOpen(false);
    DeleteCaseInfo(id)(dispatch);
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
export default DeleteCaseModal;
