/* eslint-disable */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./caseResults.css";
import { Button, Table } from 'antd'
import { caseStudiesResults } from '../../../../../modules/session/data'
import { Link } from 'react-router-dom'
import { ViewCaseResults } from '../../../../../modules/session/cases-reducer'

const CaseResults = (props) => {
  let filteredCases = [];
  let id = props.match.params.id;
  const allCaseStudies = useSelector((state) => state.cases.allCaseStudies);

  const dispatch = useDispatch();

  if (allCaseStudies) {
    filteredCases = allCaseStudies?.filter((item) => {
      return item._id === id;
    });
  }

  useEffect(() => {
    ViewCaseResults()(dispatch);
  }, []);

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
