/* eslint-disable */
import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import userImg from "../../../../images/user.svg";
import "./researcherStudies.css";

const ResearcherStudies = () => {
  return (
    <div className="ResearcherStudies">
      <div className="main-page-wrapper">
        <div className="btns-wrapper">
          <Link to={'/researcher-profile'}>
            <Button className="profile-btn">Profile</Button>
          </Link>
          <Link to={'/participant-studies'}>
            <Button className="research-btn active">Research Studies</Button>
          </Link>
        </div>
        <div className="research-header-wrapper">
          <div className="personal-heading">Research Studies</div>
          <Link to={'/research-create-studies'}>
            <Button type="primary" className="create-new-study">Create New Research Study</Button>
          </Link>
        </div>
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
              <Button className="status-btn">In progress</Button>
            </div>
          </div>
          <div className="research-study-btns">
            <Button className="status-btn">View Results</Button>
            <Button type="danger" className="upload-btn">Close</Button>
            <Button type="danger" className="upload-btn">Delete</Button>
          </div>
        </div>
        <div className="study-wrapper">
          <div className="study-info-wrapper">
            <div className="study-info-img">
              <img src={userImg} alt="userImg" />
            </div>
            <div className="study">
              <div className="study-heading"> Research Study 2</div>
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
              <Button className="status-btn">Pending</Button>
            </div>
          </div>
          <div className="research-study-btns">
            <Button type="primary">Edit</Button>
            <Link to={'/participant-upload'}>
              <Button type="danger" className="upload-btn">Delete</Button>
            </Link>
          </div>
        </div>
        <div className="study-wrapper">
          <div className="study-info-wrapper">
            <div className="study-info-img">
              <img src={userImg} alt="userImg" />
            </div>
            <div className="study">
              <div className="study-heading"> Research Study 3</div>
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
              <Button className="status-btn" type="danger">Closed</Button>
            </div>
          </div>
          <div className="research-study-btns">
            <Button type="danger">Delete</Button>
          </div>
        </div>
        <div className="study-wrapper">
          <div className="study-info-wrapper">
            <div className="study-info-img">
              <img src={userImg} alt="userImg" />
            </div>
            <div className="study">
              <div className="study-heading"> Research Study 4</div>
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
              <Button className="status-btn">Completed</Button>
            </div>
          </div>
          <div className="research-study-btns">
            <Button className="status-btn">View Results</Button>
            <Button type="danger" className="upload-btn">Close</Button>
            <Button type="danger" className="upload-btn">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResearcherStudies;
