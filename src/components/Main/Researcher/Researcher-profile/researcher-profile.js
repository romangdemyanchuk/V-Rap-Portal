/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../../../images/user.svg";
import { Input, Button, Menu, Dropdown, message, InputNumber } from "antd";
import HeaderBtns from '../../Participant/HeaderBtns'
import { DownOutlined } from '@ant-design/icons';
import "./researcher-profile.css";

const ResearcherProfile = () => {
  return (
    <div className="container">
      <div className="main-page-wrapper">
        {/*<HeaderBtns study_route={'/case-studies'}/>*/}
        <div className="btns-wrapper">
          <Link to={'/researcher-profile'}>
            <Button className="profile-btn">Profile</Button>
          </Link>
          <Link to={'/case-studies'}>
            <Button className="research-btn">Research Studies</Button>
          </Link>
        </div>
        <div className="personal-fields-wrapper">
          <div className="personal-heading">Profile Information</div>
          <div>
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
