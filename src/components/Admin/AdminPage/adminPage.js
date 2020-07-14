/* eslint-disable */
import React from "react";
import {Link} from "react-router-dom";
import { Button } from 'antd'
import "./adminPage.scss";

const AdminPage = () => {
  return <div className="admin-page">
            <div className="admin-page__text">
              <div className="admin-page__text-heading">
                Admin Panel
              </div>
              <div className="admin-page__user-name">
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
}
export default AdminPage
