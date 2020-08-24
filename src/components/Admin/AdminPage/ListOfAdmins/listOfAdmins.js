/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./listOfAdmins.css";
import { allUsers} from '../../../../modules/session/main-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Skeleton, Table } from 'antd'
import { researcherListColumns as list } from '../../../../modules/session/data'
import { Link } from 'react-router-dom'
import DeleteModal from '../ListOfResearchers/ResearcherChanges/DeleteModal'

const ListOfAdmins = () => {
  const userData = useSelector(  (state) => state.main.listOfAdmins);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [caseId, setCaseId] = useState(null);
  const { researcherListColumns } = list(setDeleteModalIsOpen, setCaseId);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    allUsers()(dispatch);
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton active className="tableLoader" />
      ) : (
    <div className="researchers-list">
      <DeleteModal deleteModalIsOpen={deleteModalIsOpen} setDeleteModalIsOpen={setDeleteModalIsOpen} id={caseId}/>
      <div className="researcher-btns-wrapper">
        <div
          className="case-studies-heading"
          style={{ marginBottom: "20px", fontWeight: "bold", fontSize: "20px" }}
        >
          Admins
        </div>
        <Link to={'/admin-portal'}>
          <Button>Output</Button>
        </Link>
      </div>
  <Table rowKey={'_id'} dataSource={userData} columns={researcherListColumns} />
    </div>
      )}
    </>
  )
};
export default ListOfAdmins;
