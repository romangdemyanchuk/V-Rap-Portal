/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import { Button } from 'antd'

const Main = () => {
  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div className="main-page-header">V-Rap</div>
        <div className="main-page-btns">
          <Link to={"/participant-register"}>
            <Button type="button" className="main-block-btn btn btn-light">
              I`m Participant
            </Button>
          </Link>
          <Link to={"/researcher-login"}>
            <Button type="button" className="main-block-btn btn btn-light">
              I`m Researcher
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Main;
