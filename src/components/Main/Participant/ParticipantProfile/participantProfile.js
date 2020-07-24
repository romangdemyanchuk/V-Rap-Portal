/* eslint-disable */
import React, { useEffect} from 'react'
import { Input, Button, InputNumber, Cascader, Form, Select, TreeSelect } from 'antd'
const { TreeNode } = TreeSelect;
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
  let { name, age, location, income, headset } = partData

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
  const headsetsChange = value => {
    headset = value
  };

  const layout = {
    labelCol: {
      span: 16,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return <>
    {isLoading ? <Loader /> :
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
                  <InputNumber min={10} max={100} className="input-number" />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Location"
                  name="location"
                  rules={[{ required: true, message: 'Please choose location!' }]}
                >
                  <TreeSelect
                    showSearch
                    style={{ width: '100%' }}
                    value={headset}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    multiple
                    treeDefaultExpandAll
                    // onChange={headsetsChange}
                  >
                    {countryVariants.map((item) =>
                      <TreeNode value={item.value} title={item.label} key={item.value} />
                    )}

                  </TreeSelect>
                </Form.Item>
                <Form.Item
                  name="income"
                  label="Average Income(USD)"
                  rules={[{ required: true, message: 'Please input Income(USD)!' }]}
                >
                  <InputNumber placeholder="Average Income" max={10000000}/>
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Main VR Headset"
                  name="headset"
                  rules={[{ required: true, message: 'Please choose location!' }]}
                >
                  <TreeSelect
                    showSearch
                    style={{ width: '100%' }}
                    value={headset}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    multiple
                    treeDefaultExpandAll
                    // onChange={headsetsChange}
                  >
                    {headsetsVariants.map((item) =>
                      <TreeNode value={item.value} title={item.label} key={item.value} />
                    )}

                  </TreeSelect>
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
