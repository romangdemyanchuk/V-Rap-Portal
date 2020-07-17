/* eslint-disable */
import React from "react";
import "./deleteModal.css";
import {Button, Modal} from "antd";
import { ApiDeleteCaseInfo } from '../../../../../../modules/session/session-reducers'
import { useDispatch } from 'react-redux'

const DeleteModal = ({ deleteModalIsOpen, setDeleteModalIsOpen, title, id }) => {
  let dispatch = useDispatch()
  const  closeModal = () => {
    setDeleteModalIsOpen(false);
  }
  const  onOkCLick = () => {
    ApiDeleteCaseInfo(id)(dispatch)
    setDeleteModalIsOpen(false);
  }
  return (
    <div className="delete-block">
      <Modal
        title={title}
        visible={deleteModalIsOpen}
        onOk={closeModal}
        onCancel={closeModal}
        className="deleteModal"
      >
      <div className="delete__btns">
        <Button onClick={closeModal}>Cancel</Button>
        <Button type="primary" onClick={onOkCLick}>Ok</Button>
      </div>
      </Modal>
    </div>
  )
}
export default DeleteModal;
