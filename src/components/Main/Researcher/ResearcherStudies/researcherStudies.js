/* eslint-disable */
import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import userImg from "../../../../images/user.svg";
import WithAuthRedirect from "../../../../hoc/hoc";
import "./researcherStudies.css";
import { useDispatch, useSelector } from 'react-redux'
import { ApiChangeStatus, ApiDeleteCaseInfo } from '../../../../modules/session/session-reducers'
import Loader from '../../../Loader/loader'

const ResearcherStudies = () => {
  let dispatch = useDispatch()
  const researcherStudies = useSelector(state => state.researcherStudies);
  const isLoading = useSelector(state => state.isLoading)

  // researcherStudies.forEach(study => console.log(study))
  const studies = researcherStudies.map((study) =>
    <div key={study.id} className="researcher-studies__study-wrapper">
      <div className="researcher-studies__info-wrapper">
        <div className="researcher-studies__study-info-img">
          <img src={userImg} alt="userImg" />
        </div>
        <div className="study">
          <div className="researcher-studies__heading">
            {study.heading}
          </div>
          <div className="researcher-studies__info">
            {study.info}
          </div>
          <div className="researcher-studies__require">
            {study.required}
          </div>
          <div className="researcher-studies__device">
            {study.device}
          </div>
        </div>
        <div className="researcher-studies__btns">
          <Button className="status-btn"
                  onClick={() => { ApiChangeStatus(study.id, 3)(dispatch)}}
          >
            In progress
          </Button>
        </div>
      </div>
      <div className="research-study-btns">
        <Button className="status-btn">View Results</Button>
        <Button type="danger" className="upload-btn">Close</Button>
        <Button type="danger" className="upload-btn"
                onClick={() =>{ ApiDeleteCaseInfo(study.id)(dispatch)}}>
          {isLoading ? <Loader/> : 'Delete'}
        </Button>
      </div>
    </div>
  );
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
