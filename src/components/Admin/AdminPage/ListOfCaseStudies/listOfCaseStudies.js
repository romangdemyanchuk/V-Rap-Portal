/* eslint-disable */
import React, { useState } from 'react'
import "./listOfCaseStudies.css";
import { Table } from "antd";
import { useDispatch, useSelector} from "react-redux";
import AdminsChanges from './CaseStudiesChanges'

const ListOfCaseStudies = () => {
  const [modalOpen, setmodalOpen] = useState(false);
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
    <div className="case-studies">
      <AdminsChanges modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
      <div className="case-studies__heading">Case Studies - All</div>
      <div className="case-studies__wrapper">
        <div onClick={() => setmodalOpen(true)}>
          <Table columns={caseStudiesColumns.caseStudiesColumns} dataSource={caseStudies.caseStudies}/>
        </div>
      </div>
    </div>
  );
};
export default ListOfCaseStudies;
