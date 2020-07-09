/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import { Button } from 'antd'

const Main = () => {
<<<<<<< HEAD
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
=======

  return <div className="container">
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
>>>>>>> ec59e5c63b2d9faaa4942f34d4528c91894b432d
        </div>
};
export default Main;
