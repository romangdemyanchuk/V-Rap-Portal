/* eslint-disable */
import React, {useState, useEffect} from "react";
import { Button, Tag } from 'antd'
import { Link} from "react-router-dom";
import userImg from "../../../../images/user.svg";
import FileUpload from './FileUpload'
import WithAuthRedirect from "../../../../hoc/hoc";
import "./participantStudies.scss";
import { useSelector, useDispatch } from "react-redux";
import { ApiAllCasesInfo } from "../../../../modules/session/session-reducers";
import { caseStatusName } from "../../Researcher/ResearcherStudies/researcherStudies";

const ParticipantStudies = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const allCaseStudies = useSelector(state => state.allCaseStudies)

const dispatch = useDispatch()

  useEffect(() =>
    ApiAllCasesInfo()(dispatch)
    ,[])

  return (
    <div className="root-PartStudies">
     <FileUpload modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
      <div className="participant-studies__btns-wrapper">
        <Link to={'/participant-profile'}>
          <Button className="profile-btn">Profile</Button>
        </Link>
        <Link to={'/participant-studies'}>
          <Button className="research-btn active">Research Studies</Button>
        </Link>
      </div>
      <div className="participant-studies__personal-heading">Research Studies</div>
      {allCaseStudies.map( d => <div className="participant-studies__wrapper" key={d.id}>
        <div className="participant-studies__info-wrapper">
          <div className="participant-studies__img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="participant-studies__study">
            <div className="participant-studies__heading">
              {d.title}
            </div>
            <div className="participant-studies__info">
            {d.description}
            </div>
            <div className="participant-studies__require">
              Required Headset
            </div>
            <div className="participant-studies__device">
            {d.headset}
            </div>
          </div>
          <div className="participant-studies__btns">
            {caseStatusName(d.status)}
          </div>
        </div>
        <div className="participant-studies__load-btns">
          <Button type="primary">
            Download Research Study
          </Button>
          <Button type="primary" className="participant-studies__upload-btn" onClick={() => setmodalOpen(true)}>
            Upload Results
          </Button>
        </div>
      </div>)}
    </div>
  )
}

const AuthRedirectComponent = WithAuthRedirect(ParticipantStudies)

export default AuthRedirectComponent;
