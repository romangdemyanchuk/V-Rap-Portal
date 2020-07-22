/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Button, Skeleton } from "antd";
import { Link } from "react-router-dom";
import WithAuthRedirect from "../../../../hoc/hoc";
import "./researcherStudies.css";
import { useDispatch, useSelector } from 'react-redux'
import { AllCasesInfo } from '../../../../modules/session/session-reducers'
import Case from './Case'

const ResearcherStudies = () => {

  let dispatch = useDispatch()

  const allCaseStudies = useSelector(state => state.allCaseStudies)

  const isLoading = useSelector(state => state.isLoading)

  useEffect(() =>
    AllCasesInfo()(dispatch)
    , [])

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
      {isLoading ? <Skeleton active /> : allCaseStudies.map((study) => <Case study={study} key={study.id} />)}
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ResearcherStudies)

export default AuthRedirectComponent;
