/* eslint-disable */
import React, { useState } from 'react'
import "./listOfResearchers.css";
import { Button, Table } from 'antd'
import {useSelector } from 'react-redux'
import ResearcherChanges from './ResearcherChanges'
import ResearcherCreate from './ResearcherCreate'
import { researcherListColumns as list } from  '../../../../modules/session/data'

const ListOfResearchers = () => {
  const [modalOfCreateOpen, setmodalOfCreateOpen] = useState(false);
  const [modalsOpen, setmodalOpen] = useState(false);
  const { researcherListColumns } = list(setmodalOpen)

  const researchersList = useSelector(state => state.researchersList)
  return <div className="researchers-list">
        <ResearcherChanges modalOpen={modalsOpen} setmodalOpen={setmodalOpen}/>
        <ResearcherCreate modalOpen={modalOfCreateOpen} setmodalOpen={setmodalOfCreateOpen}/>
        <div className="researchers-list__btn-wrapper">
      <Button style={{ marginBottom: '20px' }}
        type="button"
        className="researchers-profile-btn"
        onClick={() => setmodalOfCreateOpen(true)}>
        Create Researcher Profile
      </Button>
        </div>
          <Table columns={researcherListColumns} dataSource={researchersList}/>
      </div>
}

export default ListOfResearchers;

