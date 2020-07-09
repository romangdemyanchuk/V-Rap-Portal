/* eslint-disable */
import React from "react";
import {Link } from "react-router-dom";
import { Input, Button} from "antd";
import "./researcherProfile.scss";

const ResearcherProfile = () => {
  return (
    <div className="root-ResearcherProfile">
      <div className="main-page-wrapper">
        <div className="btns-wrapper">
          <Link to={'/researcher-profile'}>
            <Button className="profile-btn active researcher-profile-btn">Profile</Button>
          </Link>
          <Link to={'/researcher-studies'}>
            <Button className="research-btn">Research Studies</Button>
          </Link>
        </div>
        <div className="personal-fields-wrapper">
          <div className="personal-heading">Profile Information</div>
            <div className="fields-wrapper">
              <p>Name</p>
              <Input placeholder="Type here.." />
            </div>
            <div className="fields-wrapper">
              <p>School/Institution Name</p>
              <Input placeholder="Type here.." />
            </div>
            <div className="fields-wrapper">
              <p>Area of Research</p>
              <Input placeholder="Type here.." />
            </div>
          <div className="changes-btns">
            <Button className="save-btn" type="primary">Save changes</Button>
            <Button className="cancel-btn">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResearcherProfile
