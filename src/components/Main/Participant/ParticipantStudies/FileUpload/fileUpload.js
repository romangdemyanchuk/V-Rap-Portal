/* eslint-disable */
import React, { useState } from "react";
import { Button, Input, Modal } from 'antd'
import AboutStudies from "./SuccessUploadModal";
import "./fileUpload.scss";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { UploadResultFile } from '../../../../../modules/session/auth-reducer'



const FileUpload = ({ modalOpen, setmodalOpen }) => {
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [fileInfo, setFileInfo] = useState(null);

  const closeModal = () => {
    setmodalOpen(false);
  }
const dispatch = useDispatch();
  const fileSelected = event => {
    setFileInfo(event.target.files[0]);
  }
  const fileSend = () => {
    UploadResultFile(fileInfo,setmodalOpen, setSuccessModalIsOpen)(dispatch)
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
        <Input type="file" id="uploads" multiple onChange={fileSelected}/>
        <Button onClick={fileSend} disabled={!fileInfo && true}>Upload</Button>
        {/*<input type="file" />*/}
      </Modal>
    </div>
  );
};
export default FileUpload;
