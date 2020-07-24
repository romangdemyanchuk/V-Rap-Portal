/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { caseStudiesColumns as list } from  '../../../../modules/session/data'
import "./listOfCaseStudies.css";
import { AllCasesInfo } from '../../../../modules/session/session-reducers';
import { Modal, Button } from 'antd';
import { ChangingStatusAdmin } from '../../../../api';

const ListOfCaseStudies = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const { caseStudiesColumns } = list(setmodalOpen)
  const allCaseStudies = useSelector(state => state.allCaseStudies)
  const dispatch = useDispatch()
  console.log(allCaseStudies, 'allCaseStudies')
  

  useEffect(() => { AllCasesInfo()(dispatch) }, [allCaseStudies.status])
  const status = (status) => {
    
    if (status == 0) return <div>Pending</div>
    else if (status == 1) return <div>Rejected</div>
    else if (status == 2) return <div>In Progress</div>
    else if (status == 3) return <div>Closed</div>
  }

  return <div className="main-page-wrapper">
    
    <div className="case-studies-heading"
         style={{marginBottom: '20px',
           fontWeight: 'bold',
           fontSize: '20px'}}
    >
      Case Studies - All
    </div>
    <div className='title-caseStudies'>
      <div>Title</div>
      <div>VR File</div>
      <div>Created At</div>
      <div>Location</div>
      <div>Age</div>
      <div>Average Income</div>
      <div>Status</div>
      <div>Participated</div>
      <div>Actions</div>
    </div>
    {allCaseStudies.map(s => <div key={s._id} className='caseStudies'>
      <div>{s.title}</div>
      <div><a>Download</a></div>
      <div>not implemented yet</div>
      <div>{s.location}</div>
      <div>{s.age[0]} - {s.age[1]}</div>
      <div>{s.income[0]} - {s.income[1]}</div>
      <div>{status(s.status)}</div>
      <div>{s.participant}</div>
      <div className='button-action'>
        <button onClick={()=> ChangingStatusAdmin(s._id)}>Accept Case Study</button>
      </div>
    </div>)}
  </div>
}
export default ListOfCaseStudies;
    