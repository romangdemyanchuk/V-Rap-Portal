/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div>
      <div className="container">
        <div className="main-page-wrapper">
          <div>
            <div className="main-page-header">V-Rap</div>
            <div className="main-page-btns">
              <Link to={"/par-register-form"}>
                <button type="button" className="main-block-btn btn btn-light">
                  I`m Participant
                </button>
              </Link>
              <Link to={"/par-login-form"}>
                <button type="button" className="main-block-btn btn btn-light">
                  I`m Researcher
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
