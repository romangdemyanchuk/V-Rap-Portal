/* eslint-disable */
import React, { useEffect } from "react";
import { Button, Tag, Progress } from "antd";
import { Link } from "react-router-dom";
import userImg from "../../../../images/user.svg";
import WithAuthRedirect from "../../../../hoc/hoc";
import "./researcherStudies.css";
import { useDispatch, useSelector } from 'react-redux'
import { ApiDeleteCaseInfo, ApiAllCasesInfo } from '../../../../modules/session/session-reducers'
import { ChangingStatus } from '../../../../api/index'
import Loader from '../../../Loader/loader'

const ResearcherStudies = () => {
  let dispatch = useDispatch()

  const isLoading = useSelector(state => state.isLoading)
  const allCaseStudies = useSelector(state => state.allCaseStudies)

  console.log(allCaseStudies, 'allCaseStudies')

  useEffect(() =>
    ApiAllCasesInfo()(dispatch)
    ,[])

  let caseStatusName = (status) => {
    if (status === 0) return <Tag color='gold'>Pending</Tag>
    else if (status === 1) return <Tag color='gray'>Reject</Tag>
    else if (status === 2) return <Tag color='green'>In Progress</Tag>
    else if (status === 3) return <Tag color='red'>Closed</Tag>
  }

  let caseButtonsShown = (status) => {
    if (status === 0) return (
    <div className="research-study-btns">
        <Button style={{backgroundColor: '#0E4BEF', color: 'white'}} className="upload-btn" onClick={() => {ChangingStatus(study._id)}}>Edit</Button>
    <Button type="danger" className="upload-btn"
      onClick={() => { ApiDeleteCaseInfo(study._id)(dispatch) }}>
      {isLoading ? <Loader /> : 'Delete'}
    </Button>
  </div>)
    else if (status === 1) return (
      <div className="research-study-btns">
      <Button type="danger" className="upload-btn"
        onClick={() => { ApiDeleteCaseInfo(study._id)(dispatch) }}>
        {isLoading ? <Loader /> : 'Delete'}
      </Button>
      </div>
    )
    else if (status === 2) return (
      <div className="research-study-btns">
    <Button className="status-btn">View Results</Button>
    <Button type="danger" className="upload-btn" onClick={() => {ChangingStatus(study._id)}}>Close</Button>
    <Button type="danger" className="upload-btn"
      onClick={() => { ApiDeleteCaseInfo(study._id)(dispatch) }}>
      {isLoading ? <Loader /> : 'Delete'}
    </Button>
      </div>
    )
    else if (status === 3) return (
      <div className="research-study-btns">
      <Button type="danger" className="upload-btn"
        onClick={() => { ApiDeleteCaseInfo(study._id)(dispatch) }}>
        {isLoading ? <Loader /> : 'Delete'}
      </Button>
      </div>
    )
  }

     <div className="research-study-btns">
        <Button className="status-btn">View Results</Button>
        <Button type="danger" className="upload-btn" onClick={() => {ChangingStatus(study._id)}}>Close</Button>
        <Button type="danger" className="upload-btn"
          onClick={() => { ApiDeleteCaseInfo(study._id)(dispatch) }}>
          {isLoading ? <Loader /> : 'Delete'}
        </Button>
      </div>
  
  const studies = allCaseStudies.map((study) =>
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
      {caseButtonsShown(study.status)}
      {/* <div className="research-study-btns">
        <Button className="status-btn">View Results</Button>
        <Button type="danger" className="upload-btn" onClick={() => {ChangingStatus(study._id)}}>Close</Button>
        <Button type="danger" className="upload-btn"
          onClick={() => { ApiDeleteCaseInfo(study._id)(dispatch) }}>
          {isLoading ? <Loader /> : 'Delete'}
        </Button>
      </div> */}
    </div>
  )

  return (
    <div className="ResearcherStudies">
      <div className="researcher-studies__btns-wrapper">
        <Link to={'/researcher-profile'}>
          <Button className="researcher-studies__profile-btn">Profile</Button>
        </Link>
        <Link to={'/researcher-studies'}>
          <Button className="researcher-studies__btn active">Research Studies</Button>
        </Link>
      </div>
      <div className="researcher-profile__header-wrapper">
        <div className="researcher-studies__personal-heading">Research Studies</div>
        <Link to={'/research-create-studies'}>
          <Button type="primary" className="create-new-study">Create New Research Study</Button>
        </Link>
      </div>
      <div>{studies}</div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ResearcherStudies)

export default AuthRedirectComponent;
