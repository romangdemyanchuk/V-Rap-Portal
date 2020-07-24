/* eslint-disable */
import React, { useEffect} from 'react'
import { Input, Button, InputNumber, Cascader, Form, Select } from 'antd'
import "./participantProfile.scss";
import WithAuthRedirect from "../../../../hoc/hoc";
import { countryVariants, headsetsVariants } from '../../../../modules/session/data'
import {
  EditParticipantProfile,
  PartProfileInfo,
} from '../../../../modules/session/session-reducers'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Loader/loader'
import Header from "./../header";

const ParticipantProfile = () => {

  const partData = useSelector(state => state.partInfo)
  const { name, age, location, income, headset } = partData

  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    PartProfileInfo()(dispatch)
  }, [])

  const formIsValid = (props) => {
    EditParticipantProfile({
      ...props
    })(dispatch);
  }

  const layout = {
    labelCol: {
      span: 16,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return <>
    {!partData.name ? <Loader /> :
      <div className="root-PartProfile">
        <Header profile={'/participant-profile'} studies={'/participant-studies'}
                disableButtons={!!(!partData.name || !partData.age || !partData.location || !partData.income || !partData.headset)}/>
        <div className="participant-profile__personal-info-block">
          <div className="participant-profile__wrapper">
            <div className="participant-profile__personal-heading">Profile Information</div>
            <div className="participant-profile__fields">
              <Form {...layout} name="control-hooks"
                initialValues={{
                  'name': name,
                  'age': age,
                  'location': location,
                  'income': income,
                  'headset': [headset]
                }}
                onFinish={formIsValid}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please input name!' }]}
                >
                  <Input placeholder="Type here.." />
                </Form.Item>
                <Form.Item
                  name="age"
                  label="Age"
                  rules={[{ required: true, message: 'Please input age!' }]}
                >
                  <InputNumber min={10} max={90} className="input-number" />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Location"
                  name="location"
                  rules={[{ required: true, message: 'Please choose location!' }]}
                >
                  <Select options={countryVariants} placeholder={location ? location : "--Countries--"} />
                </Form.Item>
                <Form.Item
                  name="income"
                  label="Average Income(USD)"
                  rules={[{ required: true, message: 'Please input Income(USD)!' }]}
                >
                  <Input placeholder="Average Income" />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Main VR Headset"
                  name="headset"
                  rules={[{ required: true, message: 'Please input headset!!' }]}
                >
                  <Cascader options={headsetsVariants} placeholder={headset ? headset : "--Headsets--"} />
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
                    <Button className="participant-profile__cancel-btn">
                      Cancel
                  </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    }
  </>
}

const AuthRedirectComponent = WithAuthRedirect(ParticipantProfile)

export default AuthRedirectComponent;
