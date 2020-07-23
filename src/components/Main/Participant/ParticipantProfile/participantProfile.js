/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Input, Button, InputNumber, Cascader, Form } from 'antd'
import "./participantProfile.scss";
import WithAuthRedirect from "../../../../hoc/hoc";
import { countryVariants, headsetsVariants } from '../../../../modules/session/data'
import {
  EditParticipantProfile,
  EditPartIcipantProfile,
  ParticipantInfo,
} from '../../../../modules/session/session-reducers'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Loader/loader'

const ParticipantProfile = () => {
  const partData = useSelector(state => state.partInfo)
  const [name, setName] = useState(partData.name);
  const [age, setAge] = useState(partData.age);
  const [location, setLocation] = useState(partData.location);
  const [income, setIncome] = useState(partData.income);
  const [headset, setHeadset] = useState(partData.headset);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const isLoading = useSelector(state => state.isLoading)
  let dispatch = useDispatch()

  useEffect(() => {
    setName(partData.name)
    setAge(partData.age)
    setLocation(partData.location)
    setIncome(partData.income)
    setHeadset(partData.headset)
    ParticipantInfo()(dispatch)
  }, [partData.name, partData.age, partData.location, partData.income, partData.headset])

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
  const logOut = () => {
    localStorage.clear();
  }
  const formIsValid = () => {
    EditParticipantProfile({
      name: name, age: age, location: location,
      income: income, headset: headset
    })(dispatch);
    setButtonIsDisabled(true)

  }

  const layout = {
    labelCol: {
      span: 16,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <div className="root-PartProfile">
      <div className="participant-profile__btns-wrapper">
        <div>
          <Link to={'/participant-profile'}>
            <Button className="participant-profile__btn active">Profile</Button>
          </Link>
          <Link to={'/participant-studies'}>
            <Button className="research-btn"
                    disabled={buttonIsDisabled ? false : true}
              >Research Studies</Button>
          </Link>
        </div>
        <div>
          <Link to={'/participant-login'} className="log-out-btn">
            <Button
              onClick={logOut}
            >
              Log out
            </Button>
          </Link>
        </div>
      </div>
      <div className="participant-profile__personal-info-block">
        <div className="participant-profile__wrapper">
          <div className="participant-profile__personal-heading">Profile Information</div>
          <div className="participant-profile__fields">
            <Form {...layout} name="control-hooks" onFinish={formIsValid}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input name!' }]}
              >
                <Input placeholder="Type here.."
                       onChange={setName}
                       value={name}
                />
              </Form.Item>
              <Form.Item
                name="age"
                label="Age"
                rules={[{ required: true, message: 'Please input age!' }]}
              >
                <InputNumber min={1} max={300}
                             className="input-number"
                             onChange={setAge}
                             value={age}
                />
              </Form.Item>
              <Form.Item
                className="personal-stats__fields-wrapper"
                label="Location"
                name="location"
                rules={[{ required: true, message: 'Please choose location!' }]}
              >
                <Cascader options={countryVariants} placeholder={location ? location : "--Countries--"}
                          onChange={setLocation}
                />
              </Form.Item>
              <Form.Item
                name="income"
                label="Average Income(USD)"
                rules={[{ required: true, message: 'Please input Income(USD)!' }]}
              >
                <Input placeholder="Average Income"
                       onChange={setIncome}
                       value={income}
                />
              </Form.Item>
              <Form.Item
                className="personal-stats__fields-wrapper"
                label="Main VR Headset"
                name="headsets"
                rules={[{ required: true, message: 'Please input headset!!' }]}
              >
                <Cascader options={headsetsVariants} placeholder={location ? location : "--Countries--"}/>
              </Form.Item>
              <Form.Item
                className="personal-stats__fields-wrapper"
              >
                <div className="participant-profile__changes-btns">
                  <Button className="participant-profile__save-btn"
                          type="primary" htmlType="submit"
                  >
                    {isLoading ? <Loader /> : 'Save changes'}
                  </Button>
                  <Button className="participant-profile__cancel-btn"
                          onClick={resetFieldsValue}
                  >
                    Cancel
                  </Button>
                </div>
              </Form.Item>
            </Form>
          {/*  <div className="participant-profile__fields-wrapper">*/}
          {/*    <p>Name</p>*/}
          {/*    <Input placeholder="Type here.."*/}
          {/*      onChange={setName}*/}
          {/*      value={name}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="participant-profile__fields-wrapper">*/}
          {/*    <p>Age</p>*/}
          {/*    <InputNumber min={1} max={300}*/}
          {/*      className="input-number"*/}
          {/*      onChange={setAge}*/}
          {/*      value={age}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="participant-profile__fields-wrapper">*/}
          {/*    <p className="before-dropdown">Location</p>*/}
          {/*    <Cascader options={countryVariants} placeholder={location ? location : "--Countries--"}*/}
          {/*      onChange={setLocation}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="participant-profile__fields-wrapper">*/}
          {/*    <p>Average Income(USD)</p>*/}
          {/*    <Input placeholder="Average Income"*/}
          {/*      onChange={setIncome}*/}
          {/*      value={income}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="participant-profile__fields-wrapper">*/}
          {/*    <p className="before-dropdown">Main VR Headset</p>*/}
          {/*    <Cascader options={headsetsVariants} placeholder={headset ? headset : "--Headsets--"}*/}
          {/*      onChange={setHeadset} />*/}
          {/*  </div>*/}
          {/*</div>*/}

        </div>
      </div>
      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ParticipantProfile)


export default AuthRedirectComponent;
