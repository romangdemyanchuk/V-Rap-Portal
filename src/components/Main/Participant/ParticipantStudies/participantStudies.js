/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Button, Skeleton, Tag } from "antd";
import userImg from "../../../../images/user.svg";
import FileUpload from "./FileUpload";
import WithAuthRedirect from "../../../../hoc/hoc";
import "./participantStudies.scss";
import { useSelector, useDispatch } from "react-redux";
import { AllCasesInfo, FiltredCases } from '../../../../modules/session/cases-reducer'
import Header from "./../header";
import { DownloadCaseStudy } from '../../../../api'
import {UploadResults} from "../../../../api/index"

const ParticipantStudies = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [isStudiesBtnActive] = useState(true);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const allCaseStudies = useSelector((state) => state.cases.allCaseStudies);
  console.log('allCaseStudies', allCaseStudies);
  let caseStatusName = (status) => {
    if (status === 0) return <Tag color="green">In progress</Tag>;
    else if (status === 1)
      return <Tag color="gold">Participant base is full</Tag>;
    else if (status === 2) return <Tag color="danger">Closed</Tag>;
  };

  const dispatch = useDispatch();

  useEffect(() => AllCasesInfo()(dispatch), []);

  const partData = useSelector((state) => state.main.partInfo);
  let { name, age, location, income, headset } = partData;
  // if (!name || !age || !location || !income || !headset) return <Redirect to='participant-profile'/>

  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <div className="root-PartStudies">
          <FileUpload modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
          <Header isStudiesBtnActive={isStudiesBtnActive}/>
          <div className="participant-studies__personal-heading">
            Research Studies
          </div>
          <div className="ParticipantStudies-Cases">
            {allCaseStudies.length === 0 ? (
              <h1 className="emptyCaseStudies">You have not selected for any Research Studies</h1>
            ) : (
              allCaseStudies.map((d) => (
                <div className="participant-studies__wrapper" key={d._id}>
                  <div className="participant-studies__info-wrapper">
                    <div className="participant-studies__img">
                      <img src={d.avatarUrl ? d.avatarUrl : userImg}
                           style={{width: 150, height: 150, borderRadius:'50%'}} alt="userImg" />
                        {/*<img src={userImg} alt="userImg" />*/}
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
                    <Button type="primary"
                            onClick={() => DownloadCaseStudy(d._id)}
                    >Download Research Study</Button>
                    <Button
                      type="primary"
                      className="participant-studies__upload-btn"
                      onClick={() => setmodalOpen(true)}
                    >
                      Upload Results
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ParticipantStudies);

export default AuthRedirectComponent;
