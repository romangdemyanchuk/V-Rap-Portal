/* eslint-disable */
import React, {useState} from "react";
import { message, Button, Modal, Progress, Input } from 'antd'
// import AboutStudies from './AboutStudies'
import "./researcherChanges.css";
import "antd/dist/antd.css";

const ResearcherChanges = ({modalOpen, setmodalOpen, modalIsOpen}) => {
  console.log('modalIsOpen', modalIsOpen)
  const uploadClick = () => {
    setmodalOpen(false);
  }
  const  closeModal = e => {
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
    <div>
      <div>
        <Modal
          title="Admins Changes"
          visible={modalIsOpen}
          onOk={closeModal}
          onCancel={closeModal}
        >
          <div className="research-changes-wrapper">
            <div>
              <div className="fields-wrapper">
                <p>Name</p>
                <Input placeholder="Type here.." />
              </div>
              <div className="fields-wrapper">
                <p>School/Institution Name</p>
                <Input placeholder="Type here.." />
              </div>
              <div className="fields-wrapper">
                <p>Area of Research</p>
                <Input placeholder="Type here.." />
              </div>
            </div>
            <div className="changes-btns research-modal-btns">
              <Button className="save-btn" type="primary">Save</Button>
              <Button type="danger" className="cancel-btn">Delete</Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default ResearcherChanges;
