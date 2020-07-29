/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { caseStudiesColumns as list } from "../../../../modules/session/data";
import "./listOfCaseStudies.css";
import { AllCasesInfo } from "../../../../modules/session/cases-reducer";
import { Table } from 'antd'

export const status = (status) => {
  if (status == 0) return <div>Pending</div>;
  else if (status == 1) return <div>Rejected</div>;
  else if (status == 2) return <div>In Progress</div>;
  else if (status == 3) return <div>Closed</div>;
};

const ListOfCaseStudies = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const { caseStudiesColumns } = list(setmodalOpen);
  const allCaseStudies = useSelector(state => state.cases.allCaseStudies);
  const dispatch = useDispatch();
  console.log(allCaseStudies, "allCaseStudies");

  useEffect(() => {
    AllCasesInfo()(dispatch);
  }, [allCaseStudies.status]);


  return (
    <div className="main-page-wrapper">
      <div
        className="case-studies-heading"
        style={{ marginBottom: "20px", fontWeight: "bold", fontSize: "20px" }}
      >
        Case Studies - All
      </div>
      <Table dataSource={allCaseStudies} columns={caseStudiesColumns} />;
    </div>
  );
};
export default ListOfCaseStudies;
