/* eslint-disable */
import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import userImg from "../../../../images/user.svg";
import "./caseStudies.css";

const CaseStudies = () => {
  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div className="study-block-header">
          <div className="study-block-header-btns">
            <Button className="study-profile-btn">Profile</Button>
            <Button className="study-research-btn">Research Studies</Button>
          </div>
        </div>
        <div className="study-info-wrapper case-wrapper">
          <div className="study-info-img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="study">
            <div className="study-heading">Study 1</div>
            <div className="study-status">Status: Active</div>
            <div className="study-participants">Participants completed: 26</div>
            <Button className="res-button">View Results</Button>
          </div>
          <Link to={"/upload-sim"} className="launch-btn">
            <Button>Launch New Study</Button>
          </Link>
        </div>
        <div className="study-info-wrapper case-wrapper">
          <div className="study-info-img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="study">
            <div className="study-heading">Study 2</div>
            <div className="study-status">Status: Closed</div>
            <div className="study-participants">
              Participants completed: 120
            </div>
            <div className="study-remaining">
              Remaining Participants: Excepteur sint occeacat cupidatat non
              proident
            </div>
            <Button className="res-button">View Results</Button>
          </div>
        </div>
        <div className="study-info-wrapper case-wrapper">
          <div className="study-info-img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="study">
            <div className="study-heading">Study 3</div>
            <div className="study-status">Status: Complete</div>
            <div className="study-participants">Participants completed: 26</div>
            <div className="study-remaining">Remaining Budget: $76.00 CAD</div>
            <Button className="res-button">View Results</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaseStudies;
