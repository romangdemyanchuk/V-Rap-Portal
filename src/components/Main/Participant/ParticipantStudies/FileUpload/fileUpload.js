/* eslint-disable */
import React, {useState} from "react";
import { message, Button, Modal, Progress, Upload } from 'antd'
import AboutStudies from './SuccessUploadModal'
import "./fileUpload.scss";
import "antd/dist/antd.css";

const FileUpload = ({modalOpen, setmodalOpen}) => {
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

  const uploadClick = () => {
    setmodalOpen(false);
  }

  const closeModal = () => {
    setmodalOpen(false);
  }
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        setSuccessModalIsOpen(true)
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
      <AboutStudies successModalIsOpen={successModalIsOpen} setSuccessModalIsOpen={setSuccessModalIsOpen}/>
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
        <Upload {...props} className="file-upload__btn-wrapper">
          <Button className="upload-btn modal-upload-btn" type="primary"
                  onClick={uploadClick}>
            Upload
          </Button>
        </Upload>
      </Modal>
    </div>
  );
};
export default FileUpload;
