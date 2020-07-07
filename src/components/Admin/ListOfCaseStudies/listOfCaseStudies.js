/* eslint-disable */
import React from "react";
import "./listOfCaseStudies.css";
import { Table } from "antd";
import { useDispatch, useSelector} from "react-redux";

const ListOfCaseStudies = () => {
  const caseStudies = useSelector((state) => {
    return {
      caseStudies: state.caseStudies
    }
  })
  const caseStudiesColumns = useSelector((state) => {
    return {
      caseStudiesColumns: state.caseStudiesColumns
    }
  })
  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div className="case-studies-heading">Case Studies - All</div>
        <div className="case-studies-wrapper">
          <Table columns={caseStudiesColumns.caseStudiesColumns} dataSource={caseStudies.caseStudies} />
        </div>
      </div>
    </div>
  );
};
export default ListOfCaseStudies;
