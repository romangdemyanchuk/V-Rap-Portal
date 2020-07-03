/* eslint-disable */
import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import userImg from "../../../../images/user.svg";
import "./headerBtns.css";

const HeaderBtns = () => {
  return (
      <div className="btns-wrapper">
        <Link to={'/personal-info'}>
          <Button className="profile-btn">Profile</Button>
        </Link>
        <Link to={"/study-info"}>
          <Button className="research-btn">Research Studies</Button>
        </Link>
      </div>
  );
};
export default HeaderBtns;
