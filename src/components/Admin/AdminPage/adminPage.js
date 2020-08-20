/* eslint-disable */
import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./adminPage.scss";
import { useSelector } from 'react-redux'
import { AllCasesInfo } from '../../../modules/session/cases-reducer'

// useEffect(() => {
//   AllCasesInfo()(dispatch);
// }, [allCaseStudies.status]);

const AdminPage = () => {
  const countOfPendingCases = useSelector((state) => state.cases.pendingCasesCount);
  console.log('countOfPendingCases', countOfPendingCases)
  return (
    <>
      <div className="admin-page">
        <div className="admin-page__text">
          <div className="admin-page__text-heading">Admin Panel</div>
          <div className="admin-page__user-name">
            User: First Name Last Name
          </div>
        </div>
        <div className="admin-page-btns">
          <Link to={"/researchers-list"}>
            <Button type="button" className="main-block-btn btn btn-light">
              Researchers
            </Button>
          </Link>
          <Link to={"/all-studies-list"}>
            <Button type="button" className="main-block-btn btn btn-light">
              All Case Studies
            </Button>
          </Link>
          <Link to={"/pending-case"}>
            <Button
              type="button"
              className="main-block-btn pending btn btn-light"
            >
              Pending Case Studies
              <div className="case-studies-count">{countOfPendingCases}</div>
            </Button>
          </Link>
          <Link to={'/admin-users'}>
            <Button type="button" className="main-block-btn btn btn-light">
              List of Admin Users
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default AdminPage;
