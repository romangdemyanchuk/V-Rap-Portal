/* eslint-disable */
import React, { useState } from "react";
import {Modal} from "antd";
import AboutStudies from "./SuccessUploadModal";
import "./fileUpload.scss";
import "antd/dist/antd.css";
import { fileUploading } from "../../../../../modules/session/cases-reducer";
import { useDispatch } from "react-redux";



const FileUpload = ({ modalOpen, setmodalOpen }) => {
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);

  const closeModal = () => {
    setmodalOpen(false);
  }
const dispatch = useDispatch()
  const fileSelected = event => {
    fileUploading(event.target.files[0])(dispatch)
  }
  return (
    <div className="root-FileUpload">
      <AboutStudies
        successModalIsOpen={successModalIsOpen}
        setSuccessModalIsOpen={setSuccessModalIsOpen}
      />
      <Modal
        title="Upload results for Research Study 1"
        visible={modalOpen}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <div className="file-upload__modal-subtitle">
          Upload the exported files from the simulation that are located on your
          desktop to receive your gift card
        </div>
        <input type="file" onChange={fileSelected}/>
      </Modal>
    </div>
  );
};
export default FileUpload;
