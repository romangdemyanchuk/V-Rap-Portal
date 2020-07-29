/* eslint-disable */
import React, { useState } from "react";
import { Upload, message, Button, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import AboutStudies from "./SuccessUploadModal";
import "./fileUpload.scss";
import "antd/dist/antd.css";
import { fileUploading } from "../../../../../modules/session/cases-reducer";
import { useDispatch } from "react-redux";

const FileUpload = ({ modalOpen, setmodalOpen }) => {
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

  const closeModal = () => {
    setmodalOpen(false);
  }
// const dispatch = useDispatch()
//   const fileSelected = event => {
//     fileUploading(event.target.files[0])(dispatch)
//   }
  
const token = localStorage.getItem('userLoginToken')
  
const props = {
  name: 'files',
  action: 'https://varapan.herokuapp.com/api/users/results',
  method: 'post',
  headers: {
    authorization: token,
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
  
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
        <Upload {...props}>
    <Button>
      <UploadOutlined /> Click to Upload
    </Button>
  </Upload>
      </Modal>
    </div>
  );
};
export default FileUpload;
