/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  caseStudiesColumns as list } from '../../../../modules/session/data'
import "./listOfCaseStudies.css";
import { AllCasesInfo } from '../../../../modules/session/cases-reducer'
import CaseStudiesChanges from '../ListOfCaseStudies/CaseStudiesChanges/caseStudiesChanges'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import DeleteCaseModal from './DeleteCaseModal'

export const status = (status) => {
  if (status === 0) return <div>Pending</div>;
  else if (status === 1) return <div>Rejected</div>;
  else if (status === 2) return <div>In Progress</div>;
  else if (status === 3) return <div>Closed</div>;
};

const ListOfCaseStudies = () => {
  const [caseId, setCaseId] = useState(null);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const { caseStudiesColumns } = list(setCaseId, setStatus, setDeleteModalIsOpen, setEditModalIsOpen);
  const allCaseStudies = useSelector((state) => state.cases.allCaseStudies);
  const dispatch = useDispatch();

  useEffect(() => {
    AllCasesInfo()(dispatch);
  }, [allCaseStudies.status]);
  return (
    <div className="main-page-wrapper">
      {
        (status === 0 && status !== null) &&
        <CaseStudiesChanges
          editModalIsOpen={editModalIsOpen}
          setEditModalIsOpen={setEditModalIsOpen}
          id={caseId}
          setCaseId={setCaseId}
        />
      }
      {
        status === 1 &&
      <CaseStudiesChanges
        editModalIsOpen={editModalIsOpen}
        setEditModalIsOpen={setEditModalIsOpen}
        id={caseId}
        setCaseId={setCaseId}
      />
      }
      {
        status === 2 &&
       <Redirect to={`/case-results/${caseId}`} />
      }
      {
        status === 3 &&
      <DeleteCaseModal
        deleteModalIsOpen={deleteModalIsOpen}
        setDeleteModalIsOpen={setDeleteModalIsOpen}
        id={caseId} />
      }
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
  );
};
export default ListOfCaseStudies;
