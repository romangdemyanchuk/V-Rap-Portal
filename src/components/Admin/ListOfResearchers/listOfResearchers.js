
/* eslint-disable */
import React from "react";
import "./listOfResearchers.css";
import { Button, Table } from 'antd'
import {useSelector } from 'react-redux'

const ListOfResearchers = () => {
  const researchersList = useSelector((state) => {
    return {
      researchersList: state.researchersList
    }
  })
  const researcherListColumns = useSelector((state) => {
    return {
      researcherListColumns: state.researcherListColumns
    }
  })
  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div className="researchers-profile-btn-wrapper">
          <Button type="button" className="researchers-profile-btn">Create Researcher Profile</Button>
        </div>
        <Table columns={researcherListColumns.researcherListColumns} dataSource={researchersList.researchersList} />
      </div>
    </div>
  );
};
export default ListOfResearchers;
