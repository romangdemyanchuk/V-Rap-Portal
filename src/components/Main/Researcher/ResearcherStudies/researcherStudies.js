/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Button, Skeleton } from "antd";
import { Link, Redirect } from "react-router-dom";
import WithAuthRedirect from "../../../../hoc/hoc";
import "./researcherStudies.css";
import { useDispatch, useSelector } from 'react-redux'
import { AllCasesInfo } from '../../../../modules/session/cases-reducer'
import Case from './Case'
import Header from "./../header";

const ResearcherStudies = () => {

  let dispatch = useDispatch()

  const allCaseStudies = useSelector(state => state.cases.allCaseStudies)
  const isLoading = useSelector(state => state.isLoading)

  useEffect(() =>
    AllCasesInfo()(dispatch)
    , [])

    const userData = useSelector(state => state.main.userInfo)
  const { name, school, area } = userData
  
  if(!!(!name || !area || !school)) return <Redirect to='researcher-profile'/>
  
  return (
    <div className="ResearcherStudies">
      <Header />
      <div className="researcher-profile__header-wrapper">
        <div className="researcher-studies__personal-heading">Research Studies</div>
        <Link to={'/research-create-studies'}>
          <Button type="primary" className="create-new-study">Create New Research Study</Button>
        </Link>
      </div>
      <div className='ResearcherStudies-cases'>
      { isLoading ? <Skeleton active /> : allCaseStudies.length === 0 ?
        <h1 className="emptyCaseStudies"> You have not created any research studies</h1> :
        allCaseStudies.map((study) => <Case study={study} key={study._id} />)
        }
      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ResearcherStudies)

export default AuthRedirectComponent;
