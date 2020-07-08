/* eslint-disable */
import React, {useState} from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import userImg from "../../../../images/user.svg";
import "./participantStudies.css";
import FileUpload from './FileUpload'

const ParticipantStudies = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);
  return (
    <div className="container">
      <div className="main-page-wrapper">
       <FileUpload modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
        <div className="btns-wrapper">
          <Link to={'/participant-profile'}>
            <Button className="profile-btn">Profile</Button>
          </Link>
          <Link to={'/participant-studies'}>
            <Button className="research-btn active">Research Studies</Button>
          </Link>
        </div>
        <div className="personal-heading">Research Studies</div>
        <div className="study-wrapper">
          <div className="study-info-wrapper">
            <div className="study-info-img">
              <img src={userImg} alt="userImg" />
            </div>
            <div className="study">
              <div className="study-heading">
                Research Study 1
              </div>
              <div className="study-info">
                Compatible Devices: ATC Vive, Oculus Rift / Rift
                ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S
              </div>
              <div className="study-require">
                Required Headset
              </div>
              <div className="study-device">
                Compatible Devices: ATC Vive, Oculus Rift / Rift S
              </div>
            </div>
            <div className="research-btns">
              <Button className="status-btn">Closed</Button>
            </div>
          </div>
          <div className="load-btns">
            <Button type="primary">Download Research Study</Button>
              <Button type="primary" className="upload-btn"
              onClick={() => setmodalOpen(true)}
              >
                Upload Results
              </Button>
          </div>
        </div>
        <div className="study-wrapper">
          <div className="study-info-wrapper">
            <div className="study-info-img">
              <img src={userImg} alt="userImg" />
            </div>
            <div className="study">
              <div className="study-heading"> Research Study 1</div>
              <div className="study-info">
                Compatible Devices: ATC Vive, Oculus Rift / Rift
                ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S
              </div>
              <div className="study-require">Required Headset</div>
              <div className="study-device">
                Compatible Devices: ATC Vive, Oculus Rift / Rift S
              </div>
            </div>
            <div className="research-btns">
              <Button className="status-btn">Participant based is full</Button>
            </div>
          </div>
          <div className="load-btns">
            <Button type="primary">Download Research Study</Button>
              <Button type="primary" className="upload-btn"
                      onClick={() => setmodalOpen(true)}
              >
                Upload Results
              </Button>
          </div>
        </div>
        <div className="study-wrapper">
          <div className="study-info-wrapper">
            <div className="study-info-img">
              <img src={userImg} alt="userImg" />
            </div>
            <div className="study">
              <div className="study-heading"> Research Study 1</div>
              <div className="study-info">
                Compatible Devices: ATC Vive, Oculus Rift / Rift
                ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S
              </div>
              <div className="study-require">Required Headset</div>
              <div className="study-device">
                Compatible Devices: ATC Vive, Oculus Rift / Rift S
              </div>
            </div>
            <div className="research-btns">
              <Button className="status-btn">In progress</Button>
            </div>
          </div>
          <div className="load-btns">
            <Button type="primary">Download Research Study</Button>
              <Button type="primary" className="upload-btn"
                      onClick={() => setmodalOpen(true)}
              >
                Upload Results
              </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
export default ParticipantStudies;
