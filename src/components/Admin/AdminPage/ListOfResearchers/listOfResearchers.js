/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./listOfResearchers.css";
import { Button, Table } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import ResearcherCreate from "./ResearcherCreate";
import { researcherListColumns as list } from "../../../../modules/session/data";
import { allResearchers } from "../../../../modules/session/main-reducer";
import DeleteModal from './ResearcherChanges/DeleteModal'

const ListOfResearchers = () => {
  const [modalOfCreateOpen, setmodalOfCreateOpen] = useState(false);
  const [modalsOpen, setmodalOpen] = useState(false);
  const { researcherListColumns } = list(setmodalOpen);
  const allResearchersData = useSelector(
    (state) => state.main.listOfResearcher
  );

  console.log(allResearchersData, "listOfResearchers");

  const dispatch = useDispatch();

  useEffect(() => {
    allResearchers()(dispatch);
  }, []);
  // const data = allResearchersData.map((r) => (
  //     <div key={r._id} className="allResearchers">
  //       <div>{r.name}</div>
  //       <div>{r.school}</div>
  //       <div>{r.area}</div>
  //       <div className="button-action">
  //         <button onClick={() => deleteResearcher(r._id)}>Delete</button>
  //       </div>
  //     </div>
  //   ))
  return (
    <div className="researchers-list">
      <DeleteModal modalOpen={modalsOpen} setmodalOpen={setmodalOpen} />
      <ResearcherCreate
        modalOpen={modalOfCreateOpen}
        setmodalOpen={setmodalOfCreateOpen}
      />
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
      {/*<div className="title-allResearchers">*/}
      {/*  <div>Name</div>*/}
      {/*  <div>School/Institution Name</div>*/}
      {/*  <div>Area of Research</div>*/}
      {/*  <div>Actions</div>*/}
      {/*</div>*/}

      <Table dataSource={allResearchersData} columns={researcherListColumns} />;
    </div>
  );
};

export default ListOfResearchers;
