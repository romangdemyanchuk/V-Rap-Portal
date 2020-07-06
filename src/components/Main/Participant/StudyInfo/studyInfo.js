/* eslint-disable */
import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import userImg from "../../../../images/user.svg";
import "./studyInfo.css";
import HeaderBtns from '../HeaderBtns'

const StudyInfo = () => {
  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div className="btns-wrapper">
          <Link to={'/personal-info'}>
            <Button className="profile-btn">Profile</Button>
          </Link>
          <Link to={'/study-info'}>
            <Button className="research-btn">Research Studies</Button>
          </Link>
        </div>
        {/*<div className="study-block-header">*/}
        {/*  <HeaderBtns profile_route="/personal-info"/>*/}
        {/*</div>*/}
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
            <Link to={'/file-upload'}>
              <Button type="primary" className="upload-btn">Upload Results</Button>
            </Link>
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
            <Link to={'/file-upload'}>
              <Button type="primary" className="upload-btn">Upload Results</Button>
            </Link>
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
            <Link to={'/file-upload'}>
              <Button type="primary" className="upload-btn">Upload Results</Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
export default StudyInfo;
