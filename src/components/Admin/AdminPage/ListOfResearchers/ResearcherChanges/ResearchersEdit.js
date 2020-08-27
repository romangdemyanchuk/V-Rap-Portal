/* eslint-disable */
import React from "react";
import { Button, Modal, Input } from "antd";
import "./ResearchersEdit.css";
import "antd/dist/antd.css";

const ResearcherChanges = ({ modalOpen, setmodalOpen }) => {
  const deleteClick = () => {
    setmodalOpen(false);
  };
  const closeModal = () => {
    setmodalOpen(false);
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
            <Button className="save-btn" type="primary">
              Save
            </Button>
            <Button type="danger" className="cancel-btn" onClick={deleteClick}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ResearcherChanges;
