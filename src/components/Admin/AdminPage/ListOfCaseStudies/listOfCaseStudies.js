/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  caseStudiesColumns as list } from '../../../../modules/session/data'
import "./listOfCaseStudies.css";
import { AllCasesInfo, ResultOfCase } from '../../../../modules/session/cases-reducer'
import CaseStudiesChanges from '../ListOfCaseStudies/CaseStudiesChanges/caseStudiesChanges'
import { Button, Table } from 'antd'
import DeleteModal from '../ListOfResearchers/ResearcherChanges/DeleteModal'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'

export const status = (status) => {
  if (status === 0) return <div>Pending</div>;
  else if (status === 1) return <div>Rejected</div>;
  else if (status === 2) return <div>In Progress</div>;
  else if (status === 3) return <div>Closed</div>;
};

export const ViewResultCase = () => {
  ResultOfCase()(dispatch)
};

const ListOfCaseStudies = () => {
  const [caseId, setCaseId] = useState(null);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const { caseStudiesColumns } = list(setCaseId, setStatus);
  const editCaseInfo = useSelector((state) => state.cases.editResearcherInfo);
  const allCaseStudies = useSelector((state) => state.cases.allCaseStudies);
  const isLoading = useSelector((state) => state.auth.isLoading);
  console.log('status', status);
  const dispatch = useDispatch();
  // console.log(allCaseStudies, "allCaseStudies");

  useEffect(() => {
    AllCasesInfo()(dispatch);
  }, [allCaseStudies.status]);

  // const caseStatus = () => {
  //   switch (status) {
  //     case 0:
  //         setEditModalIsOpen(true)
  //         setDeleteModalIsOpen(false)
  //         break
  //     case 1:
  //         setEditModalIsOpen(true)
  //         setDeleteModalIsOpen(false)
  //         break
  //     case 2:
  //       return ViewResultCase
  //     case 3:
  //        setDeleteModalIsOpen(true)
  //        setEditModalIsOpen(false)
  //         break
  //     default:
  //       return undefined
  //   }
  // }
  return (
    // <>
    //   {isLoading ? (
    //     <Skeleton active className="tableLoader" />
    //   ) : (
    <div className="main-page-wrapper">
      {
        status === 0 &&
        <CaseStudiesChanges modalOpen={true} setmodalOpen={setEditModalIsOpen} id={caseId}/>
      }
      {status === 1 &&
      <CaseStudiesChanges modalOpen={true} setmodalOpen={setEditModalIsOpen} id={caseId}/>}
      {status === 2 &&
       <Redirect to={`/case-results/${caseId}`} />}
      {status === 3 &&
      <DeleteModal deleteModalIsOpen={true} setDeleteModalIsOpen={setDeleteModalIsOpen} id={caseId} />}
      <div style={{display:'flex', justifyContent: 'space-between'}}>
        <div
          className="case-studies-heading"
          style={{ marginBottom: "20px", fontWeight: "bold", fontSize: "20px" }}
        >
          Case Studies - All
        </div>
        <Link to={'admin-portal'}><Button>Output</Button></Link>
      </div>
      <Table rowKey={'_id'} dataSource={allCaseStudies} columns={caseStudiesColumns}/>
    </div>
    //   )}
    // </>
  );
};
export default ListOfCaseStudies;
