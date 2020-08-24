/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./listOfResearchers.css";
import { Button, Skeleton, Table } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import ResearcherCreate from "./ResearcherCreate";
import { researcherListColumns as list } from "../../../../modules/session/data";
import { researcherUsers } from '../../../../modules/session/main-reducer'
import DeleteModal from './ResearcherChanges/DeleteModal'
import { Link } from 'react-router-dom'


const ListOfResearchers = () => {
  const [caseId, setCaseId] = useState(null);
  const [modalOpen, setmodalOpen] = useState(false);
  const { researcherListColumns } = list(setmodalOpen, setCaseId);
  const [modalOfCreateOpen, setmodalOfCreateOpen] = useState(false);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const allResearchersData = useSelector(
    (state) => state.main.listOfResearcher
  );

  const dispatch = useDispatch();

  useEffect(() => {
    researcherUsers()(dispatch);
  }, []);
  return (
    <>
      {isLoading ? (
        <Skeleton active className="tableLoader" />
      ) : (
    <div className="researchers-list">
      <div className="researcher-btns-wrapper">
        <div className="researchers-list__btn-wrapper">
          <Button
            style={{ marginBottom: "20px" }}
            type="button"
            className="researchers-profile-btn"
            onClick={() => setmodalOfCreateOpen(true)}
          >
            Create Researcher
          </Button>
        </div>
        <Link to={'/admin-portal'}>
          <Button>Output</Button>
        </Link>
      </div>
      <DeleteModal deleteModalIsOpen={modalOpen} setDeleteModalIsOpen={setmodalOpen} id={caseId} />
      <ResearcherCreate
        modalOpen={modalOfCreateOpen}
        setmodalOpen={setmodalOfCreateOpen}
      />
      <Table rowKey={'_id'} dataSource={allResearchersData} columns={researcherListColumns} />
    </div>
      )}
    </>
  );
};

export default ListOfResearchers;
