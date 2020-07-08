/* eslint-disable */
import React from "react";
import {Link} from "react-router-dom";
import "./mainPage.css";
import { Button } from 'antd'

const MainPage = () => {
  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div className="admin-text">
          <div className="admin-heading">
            Admin Panel
          </div>
          <div className="user-name">
            User: First Name Last Name
          </div>
        </div>
        <div className="admin-page-btns">
          <Link to={'/researchers-list'}>
            <Button type="button" className="main-block-btn btn btn-light">
              Researchers
            </Button>
          </Link>
          <Link to={'/all-studies-list'}>
            <Button type="button" className="main-block-btn btn btn-light">
              All Case Studies
            </Button>
          </Link>
          <Button
            type="button"
            className="main-block-btn pending btn btn-light"
          >
            Pending Case Studies
            <div className="case-studies-count">3</div>
          </Button>
          <Button type="button" className="main-block-btn btn btn-light">
            List of Admin Users
          </Button>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
