/* eslint-disable */
import React, { useState } from 'react'
import userImg from "../../../../../images/user.svg";
import { Link } from "react-router-dom";
import { Input, Button, Slider, InputNumber, Cascader, Upload } from 'antd'
import WithAuthRedirect from '../../../../../hoc/hoc';
const { TextArea } = Input;
import "./createNewCase.scss";
import { countryVariants, headsetsVariants, professionsList } from '../../../../../modules/session/data'
import { ApiNewCaseInfo } from '../../../../../modules/session/session-reducers'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../../Loader/loader'

const CreateNewCase = () => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState([10, 85]);
  const [avgIncome, setAvgIncome] = useState([10, 85]);
  const [parNum, setParNum] = useState(100);
  const [headsets, setHeadsets] = useState('');
  const [listOfProfessions, setListOfProfessions] = useState('');
  let dispatch = useDispatch()

  const newCaseStudyInfo = useSelector(state => state.newCaseInfo)
  const isLoading = useSelector(state => state.isLoading)
  console.log('newCaseStudyInfo', newCaseStudyInfo);

  const ageRangeChange = (value) => {
    setAge(value);
  }
  const avgRangeChange = (value) => {
    setAvgIncome(value)
  }
  const parNumberChange = (value) => {
    setParNum(value);
  }
  const cascaderHeadsetsChange = (value) => {
    setHeadsets(value);
  }
  const cascaderLocationChange = (value) => {
    setLocation(value);
  }
  const cascaderlistOfProfessionsChange = (value) => {
    setListOfProfessions(value);
  }

  const uploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
  };
  return (
    <div className="root-PersonalStats">
      <div className="personal-stats__tns-wrapper">
        <Link to={'/researcher-profile'}>
          <Button className="profile-btn">Profile</Button>
        </Link>
        <Link to={'/researcher-studies'}>
          <Button className="research-btn active">Research Studies</Button>
        </Link>
      </div>
      <div className="personal-stats__wrapper">
        <div className="personal-stats__block">
          <div className="personal-stats__personal-heading">Create Research Studies</div>
          <div className="personal-stats__info-img">
            <img src={userImg} alt="userImg" />
            <div className="personal-stats__upload-btns">
              <Upload {...uploadProps}>
                <Button className="file-upload-btn" type="primary">
                  Upload Image
                </Button>
              </Upload>
            </div>
          </div>
          <div className="personal-stats__blocks-wrapper">
            <div className="personal-stats__left-block">
              <div className="personal-stats__vr-upload">
                <Upload {...uploadProps}>
                  <Button className="personal-stats__btn">
                    Upload VR File
                  </Button>
                </Upload>
              </div>
              {/*<Progress percent={30} size="small" />*/}
              <div className="personal-stats__fields-wrapper">
                <p>Title</p>
                <Input placeholder="Title"
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p>Description</p>
                <TextArea placeholder="Type here" rows={3} className="personal-stats-area"
                  onChange={e => setDescr(e.target.value)}
                  value={descr}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p className="before-dropdown">Location</p>
                <Cascader options={countryVariants} placeholder="--Countries--"
                  onChange={cascaderLocationChange}
                  value={location}
                />
              </div>
            </div>
            <div className="personal-stats__right-block">
              <div className="personal-stats__fields-wrapper">
                <p>Age(range)</p>
                <Slider range
                  onChange={ageRangeChange}
                  value={age}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p>Average Income(range)</p>
                <Slider range
                  onChange={avgRangeChange}
                  value={avgIncome}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p>Required number of participant</p>
                <InputNumber min={1} max={300}
                  className="input-number"
                  onChange={parNumberChange}
                  value={parNum}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p className="before-dropdown">Supported Headsets</p>
                <Cascader options={headsetsVariants} placeholder="--Headsets--"
                  onChange={cascaderHeadsetsChange}
                  value={headsets}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p className="before-dropdown">List of Professions</p>
                <Cascader options={professionsList} placeholder="--Professions--"
                  onChange={cascaderlistOfProfessionsChange}
                  value={listOfProfessions} style={{}}
                />
              </div>
            </div>
          </div>
          <div className="personal-stats__footer-btns">
            <Button type="primary" className="personal-stats__create-research-btn"
              onClick={() => ApiNewCaseInfo({
                title: title, description: descr, location: location,
                age: age, income: avgIncome, participant: parNum, headset: headsets, listOfProfessions: listOfProfessions
              })(dispatch)}
            >
              {isLoading ? <Loader /> : 'Create Research Study'}
            </Button>
            <Link to={'/researcher-profile'}>
              <Button>Close Page</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(CreateNewCase)

export default AuthRedirectComponent;
