/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./listOfResearchers.css";
import { Button} from "antd";
import { useSelector, useDispatch } from "react-redux";
import ResearcherChanges from "./ResearcherChanges";
import ResearcherCreate from "./ResearcherCreate";
import { researcherListColumns as list } from "../../../../modules/session/data";
import { allResearchers } from "../../../../modules/session/main-reducer";
import { deleteResearcher } from "../../../../api";

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

  return (
    <div className="researchers-list">
      <ResearcherChanges modalOpen={modalsOpen} setmodalOpen={setmodalOpen} />
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
      <div className="title-allResearchers">
        <div>Name</div>
        <div>School/Institution Name</div>
        <div>Area of Research</div>
        <div>Actions</div>
      </div>
      {allResearchersData.map((r) => (
        <div key={r._id} className="allResearchers">
          <div>{r.name}</div>
          <div>{r.school}</div>
          <div>{r.area}</div>
          <div className="button-action">
            <button onClick={() => deleteResearcher(r._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfResearchers;
