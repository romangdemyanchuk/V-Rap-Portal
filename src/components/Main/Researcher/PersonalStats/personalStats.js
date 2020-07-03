/* eslint-disable */
import React from "react";
import userImg from "../../../../images/user.svg";
import { Input, Button } from "antd";
import "./personalStats.css";

const PersonalStats = () => {
  return (
    <div className="main-page-wrapper">
      <div className="study-block-header">
        <div className="study-block-header-btns">
          <Button className="study-profile-btn">Profile</Button>
          <Button className="study-research-btn">My studies</Button>
        </div>
      </div>
      <div className="personal-wrapper">
        <div className="file-block">
          <div className="personal-info-img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="upload-btns">
            <Button className="file-upload-btn">File upload</Button>
            <Button className="choose-btn">Choose</Button>
          </div>
        </div>
        <div className="personal-info-container">
          <div className="personal-fields-wrapper">
            <div className="personal-heading">Personal Information</div>
            <div>
              <Input placeholder="Name" />
              <Input placeholder="School/institution" />
              <Input placeholder="Area of Research" />
              <Input placeholder="Average Income" />
            </div>
            <div className="changes-btns">
              <Button className="save-btn">Save changes</Button>
              <Button className="cancel-btn">Cancel</Button>
            </div>
          </div>
          <div className="personal-stats">
            <div className="personal-title">Lifetime Stats</div>
            <div className="personal-studies">Studies Conducted: 5</div>
            <div className="personal-total">Total Participants: 526</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalStats;
