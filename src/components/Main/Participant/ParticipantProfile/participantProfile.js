/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Input, Button, InputNumber, Cascader} from 'antd'
import "./participantProfile.scss";
import WithAuthRedirect from "../../../../hoc/hoc";
import { countryVariants, headsetsVariants } from '../../../../modules/session/data'
import {
  ApiEditPartInfo,
  ApiPartInfo
} from '../../../../modules/session/session-reducers'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Loader/loader'

const ParticipantProfile = () => {
  const partData = useSelector(state => state.partInfo)
  console.log('partData', partData);
  const [name, setName] = useState(partData.name);
  const [age, setAge] = useState(partData.age);
  const [location, setLocation] = useState(partData.location);
  const [income, setIncome] = useState(partData.avgIncome);
  const [headset, setHeadset] = useState(partData.headset);
  const isLoading = useSelector(state => state.isLoading)
  let dispatch = useDispatch()

  useEffect(() => {
    setName(partData.name)
    setAge(partData.age)
    setLocation(partData.location)
    setIncome(partData.income)
    setHeadset(partData.headset)
    ApiPartInfo()(dispatch)
  }, [partData.name, partData.age, partData.location, partData.income,
    partData.headset])

  const resetFieldsValue = () => {
    setName(partData.name)
    setAge(partData.age)
    setLocation(partData.location)
    setIncome(partData.income)
    setHeadset(partData.headset)
  }

  const ageChange = (value) => {
    setAge(value);
  }
  const cascaderLocationChange = (value) => {
    setLocation(value);
  }
  const cascaderHeadsetChange = (value) => {
    setHeadset(value);
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
              <Cascader options={countryVariants} placeholder={location ? location : "--Countries--"}
                        onChange={cascaderLocationChange}

              />
            </div>
           <div className="participant-profile__fields-wrapper">
             <p>Average Income(USD)</p>
             <Input placeholder="Average Income"
                    onChange={e => setIncome(e.target.value)}
                    value={income}
             />
           </div>
            <div className="participant-profile__fields-wrapper">
              <p className="before-dropdown">Main VR Headset</p>
              <Cascader options={headsetsVariants} placeholder={headset ? headset : "--Headsets--"}
                        onChange={cascaderHeadsetChange}/>
            </div>
          </div>
          <div className="participant-profile__changes-btns">
            <Button className="participant-profile__save-btn"
              type="primary"
                    onClick={() => ApiEditPartInfo({
                      name: name, age: age, location: location,
                      income: income, headset: headset})(dispatch)}
            >
              {isLoading ? <Loader /> : 'Save changes'}
            </Button>
            <Button className="participant-profile__cancel-btn"
              onClick={resetFieldsValue}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ParticipantProfile)


export default AuthRedirectComponent;
