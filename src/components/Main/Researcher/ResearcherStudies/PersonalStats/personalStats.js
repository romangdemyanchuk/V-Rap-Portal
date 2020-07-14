/* eslint-disable */
import React, { useState } from 'react'
import userImg from "../../../../../images/user.svg";
import { Link } from "react-router-dom";
import { Input, Button, Progress, Dropdown, Menu, message, Slider, InputNumber, Cascader } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import WithAuthRedirect from '../../../../../hoc/hoc';
const { TextArea } = Input;
import "./personalStats.scss";

const PersonalStats = () => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState('');
  const [avgIncome, setAvgIncome] = useState('');
  const [parNum, setParNum] = useState('');
  const [headsets, setHeadsets] = useState('');

  const resetFieldsValue = () => {
    setTitle('')
    setDescr('')
    setLocation('')
    setAge('')
    setAvgIncome('')
    setParNum('')
    setHeadsets('')
  }
  const options = [
    {
      value: 'ukraine',
      label: 'Ukraine',
    },
    {
      value: 'italy',
      label: 'Italy',
    },
    {
      value: 'usa',
      label: 'USA',
    },
    {
      value: 'canada',
      label: 'Canada',
    },
    {
      value: 'german',
      label: 'German',
    },

  ];

  return (
    <div className="root-PersonalStats">
      <div className="personal-stats__tns-wrapper">
        <Link to={'/researcher-profile'}>
          <Button className="profile-btn">Profile</Button>
        </Link>
        <Link to={'/participant-studies'}>
          <Button className="research-btn active">Research Studies</Button>
        </Link>
      </div>
      <div className="personal-stats__wrapper">
        <div className="personal-stats__block">
          <div className="personal-stats__personal-heading">Create Research Studies</div>
          <div className="personal-stats__info-img">
            <img src={userImg} alt="userImg" />
            <div className="personal-stats__upload-btns">
              <Button className="file-upload-btn" type="primary">Upload Image</Button>
            </div>
          </div>
          <div className="personal-stats__blocks-wrapper">
            <div className="personal-stats__left-block">
              <Button className="personal-stats__btn">Upload VR File</Button>
              <Progress percent={30} size="small" />
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
                <Cascader options={options} placeholder="--Countries--"
                          onChange={e => setLocation(e.target.value)}
                          value={location}
                />
              </div>
            </div>
            <div className="personal-stats__right-block">
              <div className="personal-stats__fields-wrapper">
                <p>Age(range)</p>
                <Slider range defaultValue={[10, 85]}
                        // onChange={e => setAge(e.target.value)}
                        // value={age}
                  />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p>Average Income(range)</p>
                <Slider range defaultValue={[10, 85]}
                        // onChange={e => setAvgIncome(e.target.value)}
                        // value={avgIncome}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p>Required number of participant</p>
                <InputNumber min={1} max={300} defaultValue={100}
                             className="input-number"/>
              </div>
              <div className="personal-stats__fields-wrapper">
                <p className="before-dropdown">Supported Headsets</p>
              </div>
            </div>
          </div>
          <div className="personal-stats__footer-btns">
            <Button type="primary" className="personal-stats__create-research-btn">Create Research Study</Button>
            <Link to={'/researcher-profile'}>
              <Button>Close Page</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(PersonalStats)

export default AuthRedirectComponent;
