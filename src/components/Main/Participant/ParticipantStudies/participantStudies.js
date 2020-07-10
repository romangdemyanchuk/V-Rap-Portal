/* eslint-disable */
import React, {useState} from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import userImg from "../../../../images/user.svg";
import "./participantStudies.scss";
import FileUpload from './FileUpload'

const ParticipantStudies = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);
  return (
    <div className="root-PartStudies">
     <FileUpload modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
      <div className="participant-studies__btns-wrapper">
        <Link to={'/participant-profile'}>
          <Button className="profile-btn">Profile</Button>
        </Link>
        <Link to={'/participant-studies'}>
          <Button className="research-btn active">Research Studies</Button>
        </Link>
      </div>
      <div className="participant-studies__personal-heading">Research Studies</div>
      <div className="participant-studies__wrapper">
        <div className="participant-studies__info-wrapper">
          <div className="participant-studies__img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="participant-studies__study">
            <div className="participant-studies__heading">
              Research Study 1
            </div>
            <div className="participant-studies__info">
              Compatible Devices: ATC Vive, Oculus Rift / Rift
              ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S
            </div>
            <div className="participant-studies__require">
              Required Headset
            </div>
            <div className="participant-studies__device">
              Compatible Devices: ATC Vive, Oculus Rift / Rift S
            </div>
          </div>
          <div className="participant-studies__btns">
            <Button className="status-btn">Closed</Button>
          </div>
        </div>
        <div className="participant-studies__load-btns">
          <Button type="primary">Download Research Study</Button>
            <Button type="primary" className="participant-studies__upload-btn" onClick={() => setmodalOpen(true)}>
              Upload Results
            </Button>
        </div>
      </div>
      <div className="participant-studies__wrapper">
        <div className="participant-studies__info-wrapper">
          <div className="participant-studies__img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="participant-studies__study">
            <div className="participant-studies__heading">
              Research Study 1
            </div>
            <div className="participant-studies__info">
              Compatible Devices: ATC Vive, Oculus Rift / Rift
              ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S
            </div>
            <div className="participant-studies__require">
              Required Headset
            </div>
            <div className="participant-studies__device">
              Compatible Devices: ATC Vive, Oculus Rift / Rift S
            </div>
          </div>
          <div className="participant-studies__btns">
            <Button className="status-btn">Closed</Button>
          </div>
        </div>
        <div className="participant-studies__load-btns">
          <Button type="primary">Download Research Study</Button>
          <Button type="primary" className="participant-studies__upload-btn" onClick={() => setmodalOpen(true)}>
            Upload Results
          </Button>
        </div>
      </div>
      <div className="participant-studies__wrapper">
        <div className="participant-studies__info-wrapper">
          <div className="participant-studies__img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="participant-studies__study">
            <div className="participant-studies__heading">
              Research Study 1
            </div>
            <div className="participant-studies__info">
              Compatible Devices: ATC Vive, Oculus Rift / Rift
              ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S
            </div>
            <div className="participant-studies__require">
              Required Headset
            </div>
            <div className="participant-studies__device">
              Compatible Devices: ATC Vive, Oculus Rift / Rift S
            </div>
          </div>
          <div className="participant-studies__btns">
            <Button className="status-btn">Closed</Button>
          </div>
        </div>
        <div className="participant-studies__load-btns">
          <Button type="primary">Download Research Study</Button>
          <Button type="primary" className="participant-studies__upload-btn" onClick={() => setmodalOpen(true)}>
            Upload Results
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ParticipantStudies;
