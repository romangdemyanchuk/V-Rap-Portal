/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Input, Button, InputNumber, Cascader, Form, Select, TreeSelect } from 'antd'
import "./participantProfile.scss";
import WithAuthRedirect from "../../../../hoc/hoc";
import { countryVariants, headsetsVariants } from '../../../../modules/session/data'
import { ApiPartInfo, ApiUserInfo } from '../../../../modules/session/session-reducers'
import { useDispatch, useSelector } from 'react-redux'

const ParticipantProfile = () => {
  const partData = useSelector(state => state.partInfo)
  console.log('partData', partData);
  const [name, setName] = useState(partData.name);
  const [age, setAge] = useState(partData.age);
  const [location, setLocation] = useState(partData.location);
  const [avgIncome, setAvgIncome] = useState(partData.avgIncome);
  const [headset, setHeadset] = useState(partData.headset);
  const [trello, setTrello] = useState(partData.trello);
  const isLoading = useSelector(state => state.isLoading)
  let dispatch = useDispatch()

  useEffect(() => {
    setName(partData.name)
    setAge(partData.age)
    setLocation(partData.location)
    setAvgIncome(partData.avgIncome)
    setHeadset(partData.headset)
    setTrello(partData.trello)
    ApiPartInfo()(dispatch)
  }, [partData.name, partData.age, partData.location, partData.avgIncome,
    partData.headset, partData.trello])

  const ageChange = (value) => {
    setAge(value);
  }
  const cascaderLocationChange = (value) => {
    setLocation(value);
  }
  const cascaderHeadsetChange = (value) => {
    setHeadset(value);
  }
  const cascaderTrelloChange = (value) => {
    setTrello(value);
  }

  return (
    <div className="root-PartProfile">
      <div className="participant-profile__btns-wrapper">
        <Link to={'/participant-profile'}>
          <Button className="participant-profile__btn active">Profile</Button>
        </Link>
        <Link to={'/participant-studies'}>
          <Button className="research-btn">Research Studies</Button>
        </Link>
      </div>
      <div className="participant-profile__personal-info-block">
        <div className="participant-profile__wrapper">
          <div className="participant-profile__personal-heading">Profile Information</div>
          <div className="participant-profile__fields">
            <div className="participant-profile__fields-wrapper">
              <p>Name</p>
              <Input placeholder="Type here.."
                     onChange={e => setName(e.target.value)}
                     value={name}
               />
            </div>
            <div className="participant-profile__fields-wrapper">
              <p>Age</p>
              <InputNumber min={1} max={300}
                           className="input-number"
                           onChange={ageChange}
                           value={age}
              />
            </div>
            <div className="participant-profile__fields-wrapper">
              <p className="before-dropdown">Location</p>
              <Cascader options={countryVariants} placeholder="--Countries--"
                        onChange={cascaderLocationChange}
              />
            </div>
           <div className="participant-profile__fields-wrapper">
             <p>Average Income(USD)</p>
             <Input placeholder="Average Income"
                    onChange={e => setAvgIncome(e.target.value)}
                    value={avgIncome}
             />
           </div>
            <div className="participant-profile__fields-wrapper">
              <p className="before-dropdown">Main VR Headset</p>
              <Cascader options={headsetsVariants} placeholder="--Headsets--"
                        onChange={cascaderHeadsetChange}/>
            </div>
            <div className="participant-profile__fields-wrapper">
              <p className="before-dropdown">New Select Box(Trello)</p>
              <Cascader options={headsetsVariants} placeholder="--Trello Select--"
                        onChange={cascaderTrelloChange}/>
            </div>
          </div>
          <div className="participant-profile__changes-btns">
            <Button className="participant-profile__save-btn"
              type="primary">
              Save changes
            </Button>
            <Button className="participant-profile__cancel-btn">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ParticipantProfile)


export default AuthRedirectComponent;
