
/* eslint-disable */
import React, { useState } from 'react'
import "./listOfResearchers.css";
import { Button, Table } from 'antd'
import {useSelector } from 'react-redux'
import ResearcherChanges from './ResearcherChanges'

const ListOfResearchers = () => {
  const [modalOpen, setmodalOpen] = useState(false);

  const researchersList = useSelector(state => state.researchersList)
  const researcherListColumns = useSelector(state => state.researcherListColumns)

  console.log(researchersList, 'researchersList')

  return <div className="container">
      <div className="main-page-wrapper">
        <ResearcherChanges modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
        <div className="researchers-profile-btn-wrapper">
          <Button type="button" className="researchers-profile-btn">Create Researcher Profile</Button>
        </div>
        <div onClick={() => setmodalOpen(true)}>
          <Table columns={researcherListColumns} dataSource={researchersList}/>
        </div>
      </div>
    </div>
}

export default ListOfResearchers;
