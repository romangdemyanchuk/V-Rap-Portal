/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./pendingCase.css";
import { AllCasesInfo, PendingCasesCount } from '../../../../modules/session/cases-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table } from 'antd'
import { caseStudiesColumns as list } from '../../../../modules/session/data'
import CaseStudiesChanges from '../ListOfCaseStudies/CaseStudiesChanges'
import { Link } from 'react-router-dom'




const PendingCase = () => {
  const [filteredCases, setFilteredCases] = useState([])
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [caseId, setCaseId] = useState(null);
  const [status, setStatus] = useState(null);
  const { caseStudiesColumns } = list(setCaseId, setStatus, setEditModalIsOpen, setEditModalIsOpen);
  const allCaseStudies = useSelector((state) => state.cases.allCaseStudies);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    AllCasesInfo()(dispatch);
  }, [allCaseStudies.status]);

  useEffect(() => {
    const filtredInfo = allCaseStudies?.filter(item => item.status === 0)
    setFilteredCases(filtredInfo ? filtredInfo: {})
    PendingCasesCount(filtredInfo.length)(dispatch)
  }, [allCaseStudies])


  const modalIsOpen = () => {
    setEditModalIsOpen(true)
    return editModalIsOpen
  }
  return (
    <div>
      {
        caseId &&
        <CaseStudiesChanges modalOpen={true} setmodalOpen={setEditModalIsOpen} id={caseId}/>
      }
      <div className="pending-case-wrapper">
        <div
          className="case-studies-heading"
          style={{ marginBottom: "20px", fontWeight: "bold", fontSize: "20px" }}
        >
          Pending Case
        </div>
        <Link to={'admin-portal'}><Button>Output</Button></Link>
      </div>
     <Table rowKey={'_id'} dataSource={filteredCases} columns={caseStudiesColumns}/>
    </div>
  )
};


export default PendingCase;
