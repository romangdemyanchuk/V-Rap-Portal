/* eslint-disable */
import React from "react";
import {Link } from "react-router-dom";
import { Input, Button} from "antd";
import "./researcherProfile.scss";
import WithAuthRedirect from "../../../../hoc/hoc";

const ResearcherProfile = () => {
  return (
    <div className="root-ResearcherProfile">
      <div className="researcher-profile__btns-wrapper">
        <Link to={'/researcher-profile'}>
          <Button className="profile-btn active researcher-profile__btn">Profile</Button>
        </Link>
        <Link to={'/researcher-studies'}>
          <Button className="research-btn">Research Studies</Button>
        </Link>
      </div>
      <div className="researcher-profile__personal-fields-wrapper">
        <div className="researcher-profile__personal-heading">Profile Information</div>
          <div className="researcher-profile__fields-wrapper">
            <p>Name</p>
            <Input placeholder="Type here.." />
          </div>
          <div className="researcher-profile__fields-wrapper">
            <p>School/Institution Name</p>
            <Input placeholder="Type here.." />
          </div>
          <div className="researcher-profile__fields-wrapper">
            <p>Area of Research</p>
            <Input placeholder="Type here.." />
          </div>
        <div className="researcher-profile__changes-btns">
          <Button className="researcher-profile__save-btn" type="primary">Save changes</Button>
          <Button className="researcher-profile__cancel-btn">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ResearcherProfile)

export default AuthRedirectComponent
