/* eslint-disable */
import React, { useState } from 'react'
import "./listOfCaseStudies.css";
import { Table } from "antd";
import { useSelector } from "react-redux";
import AdminsChanges from './CaseStudiesChanges'
import { caseStudiesColumns as list } from  '../../../../modules/session/data'

const ListOfCaseStudies = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const { caseStudiesColumns } = list(setmodalOpen)
  const caseStudies = useSelector(state => state.caseStudies)

  return <div className="main-page-wrapper">
    <AdminsChanges modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
    <div className="case-studies-heading"
         style={{marginBottom: '20px',
           fontWeight: 'bold',
           fontSize: '20px'}}
    >
      Case Studies - All
    </div>
    <div className="case-studies-wrapper">
      <Table columns={caseStudiesColumns} dataSource={caseStudies}/>
    </div>
  </div>
}
export default ListOfCaseStudies;
