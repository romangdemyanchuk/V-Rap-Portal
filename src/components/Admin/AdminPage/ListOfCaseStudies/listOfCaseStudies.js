/* eslint-disable */
import React, { useState } from 'react'
import "./listOfCaseStudies.css";
import { Table } from "antd";
import { useSelector } from "react-redux";
import AdminsChanges from './CaseStudiesChanges'

const ListOfCaseStudies = () => {

  const [modalOpen, setmodalOpen] = useState(false);

  const caseStudiesColumns = useSelector(state => state.caseStudiesColumns)
  const caseStudies = useSelector(state => state.caseStudies)

  return <div className="main-page-wrapper">
    <AdminsChanges modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
    <div className="case-studies-heading">Case Studies - All</div>
    <div className="case-studies-wrapper">
      <div onClick={() => setmodalOpen(true)}>
        <Table columns={caseStudiesColumns} dataSource={caseStudies}/>
      </div>
    </div>
  </div>
}
export default ListOfCaseStudies;
