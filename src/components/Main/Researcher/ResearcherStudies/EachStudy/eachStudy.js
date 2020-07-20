/* eslint-disable */
import React, { useState } from 'react'
import userImg from '../../../../../images/user.svg'
import { Button, Tag } from 'antd'
import { ChangingStatus } from '../../../../../api'
import { ApiDeleteCaseInfo } from '../../../../../modules/session/session-reducers'
import Loader from '../../../../Loader/loader'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const EachStudy = ({study}) => {
  let dispatch = useDispatch()
  let [isloading, setLoading] = useState(false)
  let caseStatusName = (status) => {
    if (status === 0) return <Tag color='gold'>Pending</Tag>
    else if (status === 1) return <Tag color='gray'>Reject</Tag>
    else if (status === 2) return <Tag color='green'>In Progress</Tag>
    else if (status === 3) return <Tag color='red'>Closed</Tag>
  }

  let caseButtonsShown = (study) => {
    if (study.status === 0) return (
      <div className="research-study-btns">
        <Link to={`/edit-case/${study._id}`}>
          <Button style={{backgroundColor: '#0E4BEF', color: 'white'}} className="upload-btn">Edit</Button>
        </Link>
        <Button type="danger" className="upload-btn"
                onClick={() => { ApiDeleteCaseInfo(study._id)(dispatch) }}>
          {isloading ? <Loader /> : 'Delete'}
        </Button>
      </div>)
    else if (study.status === 1) return (
      <div className="research-study-btns">
        <Button type="danger" className="upload-btn"
                onClick={() => { ApiDeleteCaseInfo(study._id)(dispatch) }}>
          {isloading ? <Loader /> : 'Delete'}
        </Button>
      </div>
    )
    else if (study.status === 2) return (
      <div className="research-study-btns">
        <Button className="status-btn">View Results</Button>
        <Button type="danger" className="upload-btn" onClick={() => {ChangingStatus(study._id)}}>Close</Button>
        <Button type="danger" className="upload-btn"
                onClick={() => { ApiDeleteCaseInfo(study._id)(dispatch) }}>
          {isloading ? <Loader /> : 'Delete'}
        </Button>
      </div>
    )
    else if (study.status === 3) return (
      <div className="research-study-btns">
        <Button type="danger" className="upload-btn"
                onClick={() => { ApiDeleteCaseInfo(study._id)(dispatch)}}>
          {isloading ? <Loader /> : 'Delete'}
        </Button>
      </div>
    )
  }

  return <>
    <div key={study.id} className="researcher-studies__study-wrapper">
      <div className="researcher-studies__info-wrapper">
        <div className="researcher-studies__study-info-img">
          <img src={userImg} alt="userImg" />
        </div>
        <div className="study">
          <div className="researcher-studies__heading">
            {study.title}
          </div>
          <div className="researcher-studies__info">
            {study.description}
          </div>
          <div className="researcher-studies__require" style={{fontWeight: 'bold'}}>
            Require Headset
          </div>
          <div className="researcher-studies__device">
            {study.headset}
          </div>
        </div>
        <div className="researcher-studies__btns">
          {caseStatusName(study.status)}
        </div>
      </div>
      {caseButtonsShown(study)}
    </div>
  </>
}

export default EachStudy