/* eslint-disable */
import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import userImg from "../../../../images/user.svg";
import "./researcherStudies.css";

const ResearcherStudies = () => {
  return (
    <div className="ResearcherStudies">
      <div className="researcher-studies__btns-wrapper">
        <Link to={'/researcher-profile'}>
          <Button className="researcher-studies__profile-btn">Profile</Button>
        </Link>
        <Link to={'/participant-studies'}>
          <Button className="researcher-studies__btn active">Research Studies</Button>
        </Link>
      </div>
      <div className="researcher-profile__header-wrapper">
        <div className="researcher-studies__personal-heading">Research Studies</div>
        <Link to={'/research-create-studies'}>
          <Button type="primary" className="create-new-study">Create New Research Study</Button>
        </Link>
      </div>
      <div className="researcher-studies__study-wrapper">
        <div className="researcher-studies__info-wrapper">
          <div className="researcher-studies__study-info-img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="study">
            <div className="researcher-studies__heading">
              Research Study 1
            </div>
            <div className="researcher-studies__info">
              Compatible Devices: ATC Vive, Oculus Rift / Rift
              ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S
            </div>
            <div className="researcher-studies__require">
              Required Headset
            </div>
            <div className="researcher-studies__device">
              Compatible Devices: ATC Vive, Oculus Rift / Rift S
            </div>
          </div>
          <div className="researcher-studies__btns">
            <Button className="status-btn">In progress</Button>
          </div>
        </div>
        <div className="research-study-btns">
          <Button className="status-btn">View Results</Button>
          <Button type="danger" className="upload-btn">Close</Button>
          <Button type="danger" className="upload-btn">Delete</Button>
        </div>
      </div>
      <div className="researcher-studies__study-wrapper">
        <div className="researcher-studies__info-wrapper">
          <div className="researcher-studies__study-info-img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="study">
            <div className="researcher-studies__heading">
              Research Study 1
            </div>
            <div className="researcher-studies__info">
              Compatible Devices: ATC Vive, Oculus Rift / Rift
              ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S
            </div>
            <div className="researcher-studies__require">
              Required Headset
            </div>
            <div className="researcher-studies__device">
              Compatible Devices: ATC Vive, Oculus Rift / Rift S
            </div>
          </div>
          <div className="researcher-studies__btns">
            <Button className="status-btn">In progress</Button>
          </div>
        </div>
        <div className="research-study-btns">
          <Button className="status-btn">View Results</Button>
          <Button type="danger" className="upload-btn">Close</Button>
          <Button type="danger" className="upload-btn">Delete</Button>
        </div>
      </div>
      <div className="researcher-studies__study-wrapper">
        <div className="researcher-studies__info-wrapper">
          <div className="researcher-studies__study-info-img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="study">
            <div className="researcher-studies__heading">
              Research Study 1
            </div>
            <div className="researcher-studies__info">
              Compatible Devices: ATC Vive, Oculus Rift / Rift
              ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S
            </div>
            <div className="researcher-studies__require">
              Required Headset
            </div>
            <div className="researcher-studies__device">
              Compatible Devices: ATC Vive, Oculus Rift / Rift S
            </div>
          </div>
          <div className="researcher-studies__btns">
            <Button className="status-btn">In progress</Button>
          </div>
        </div>
        <div className="research-study-btns">
          <Button className="status-btn">View Results</Button>
          <Button type="danger" className="upload-btn">Close</Button>
          <Button type="danger" className="upload-btn">Delete</Button>
        </div>
      </div>
      <div className="researcher-studies__study-wrapper">
        <div className="researcher-studies__info-wrapper">
          <div className="researcher-studies__study-info-img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="study">
            <div className="researcher-studies__heading">
              Research Study 1
            </div>
            <div className="researcher-studies__info">
              Compatible Devices: ATC Vive, Oculus Rift / Rift
              ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S
            </div>
            <div className="researcher-studies__require">
              Required Headset
            </div>
            <div className="researcher-studies__device">
              Compatible Devices: ATC Vive, Oculus Rift / Rift S
            </div>
          </div>
          <div className="researcher-studies__btns">
            <Button className="status-btn">In progress</Button>
          </div>
        </div>
        <div className="research-study-btns">
          <Button className="status-btn">View Results</Button>
          <Button type="danger" className="upload-btn">Close</Button>
          <Button type="danger" className="upload-btn">Delete</Button>
        </div>
      </div>
    </div>
  );
};
export default ResearcherStudies;
