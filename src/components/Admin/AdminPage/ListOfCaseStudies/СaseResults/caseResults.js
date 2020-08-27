/* eslint-disable */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./caseResults.css";
import { Button, Table } from 'antd'
import { caseStudiesResults } from '../../../../../modules/session/data'
import { Link } from 'react-router-dom'

const CaseResults = (props) => {
  let filteredCases = [];
  let id = props.match.params.id;
  const allCaseStudies = useSelector((state) => state.cases.allCaseStudies);

  if (allCaseStudies) {
    filteredCases = allCaseStudies?.filter((item) => {
      return item._id === id;
    });
  }
  return (
    <div className="main-page-wrapper">
      <div className="case-result">
        <div
          className="case-studies-heading"
          style={{ marginBottom: "20px", fontWeight: "bold", fontSize: "20px" }}
        >
          Case Study
        </div>
        <Link to={props.location.propsSearch === "case" ? '/researcher-studies' : '/all-studies-list'}>
          <Button>Back</Button>
        </Link>
      </div>
      <Table rowKey={'_id'} dataSource={filteredCases} columns={caseStudiesResults} />
    </div>
  );
};
export default CaseResults;
