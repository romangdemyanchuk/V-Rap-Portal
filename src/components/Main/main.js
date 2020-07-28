/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import "./main.scss";
import { Button } from "antd";

const Main = () => {
  return (
    <>
      <div className="Main-land-view">
        <div className="Main-V-Rap">V-Rap</div>
        <div className="Main-btns">
          <Link to={"/participant-login"}>
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
    </>
  );
};

export default Main;
