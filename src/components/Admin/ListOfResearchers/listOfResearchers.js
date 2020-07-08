
/* eslint-disable */
import React, { useState } from 'react'
import "./listOfResearchers.css";
import { Button, Table } from 'antd'
import {useSelector } from 'react-redux'
import ResearcherChanges from './ResearcherChanges'

const ListOfResearchers = () => {
  const [modalOpen, setmodalOpen] = useState(false);
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
        <ResearcherChanges modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
        <div className="researchers-profile-btn-wrapper">
          <Button type="button" className="researchers-profile-btn">Create Researcher Profile</Button>
        </div>
        <div onClick={() => setmodalOpen(true)}>
          <Table columns={researcherListColumns.researcherListColumns} dataSource={researchersList.researchersList}/>
        </div>
      </div>
    </div>
  );
};
export default ListOfResearchers;
