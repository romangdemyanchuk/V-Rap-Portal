/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Button, Skeleton, Tag } from 'antd'
import userImg from "../../../../images/user.svg";
import FileUpload from './FileUpload'
import WithAuthRedirect from "../../../../hoc/hoc";
import "./participantStudies.scss";
import { useSelector, useDispatch } from "react-redux";
import { AllCasesInfo } from "../../../../modules/session/session-reducers";
import Header from "./../header";

const ParticipantStudies = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const isLoading = useSelector(state => state.isLoading)
  const allCaseStudies = useSelector(state => state.allCaseStudies)
  let caseStatusName = (status) => {
    if (status === 0) return <Tag color='green'>In progress</Tag>
    else if (status === 1) return <Tag color='gold'>Participant base is full</Tag>
    else if (status === 2) return <Tag color='danger'>Closed</Tag>
  }

  const dispatch = useDispatch()

  useEffect(() =>
    AllCasesInfo()(dispatch)
    , [])

  return (
    <div className="root-PartStudies">
      <FileUpload modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
      <Header />
      <div className="participant-studies__personal-heading">Research Studies</div>
      { isLoading ? <Skeleton active /> : allCaseStudies.length === 0 ?
        <h1 className="emptyCaseStudies"> You have not selected for any Research Studies </h1> :
        allCaseStudies.map(d =>
          <div className="participant-studies__wrapper" key={d._id}>
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
          </div>
        )}
    </div>
  )
}

const AuthRedirectComponent = WithAuthRedirect(ParticipantStudies)

export default AuthRedirectComponent;
