
/* eslint-disable */
import React, { useState } from 'react'
import "./listOfResearchers.css";
import { Button, Table } from 'antd'
import {useSelector } from 'react-redux'
import ResearcherChanges from './ResearcherChanges'
import ResearcherCreate from './ResearcherCreate'

const ListOfResearchers = () => {
  const [modalOfChangesOpen, setmodalOfChangesOpen] = useState(false);
  const [modalOfCreateOpen, setmodalOfCreateOpen] = useState(false);

  const researchersList = useSelector(state => state.researchersList)
  const researcherListColumns = useSelector(state => state.researcherListColumns)
  return <div className="researchers-list">
        <ResearcherChanges modalOpen={modalOfChangesOpen} setmodalOpen={setmodalOfChangesOpen}/>
        <ResearcherCreate modalOpen={modalOfCreateOpen} setmodalOpen={setmodalOfCreateOpen}/>
        <div className="researchers-list__btn-wrapper">
      <Button style={{marginBottom: '20px'}} type="button" className="researchers-profile-btn"
                  onClick={() => setmodalOfCreateOpen(true)}
          >Create Researcher Profile</Button>
        </div>
        <div onClick={() => setmodalOfChangesOpen(true)}>
          <Table columns={researcherListColumns} dataSource={researchersList}/>
        </div>
      </div>

}

export default ListOfResearchers;
