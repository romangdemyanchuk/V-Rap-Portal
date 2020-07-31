/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Input, Button, InputNumber, Form, Select, Skeleton } from 'antd'
import "./participantProfile.scss";
import WithAuthRedirect from "../../../../hoc/hoc";
import {
  countryVariants,
  headsetsVariants,
  professionsList,
} from "../../../../modules/session/data";
import {
  EditParticipantProfile,
  PartProfileInfo,
} from "../../../../modules/session/main-reducer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../Loader/loader";
import Header from "./../header";
import { Redirect } from 'react-router';

const ParticipantProfile = () => {
  const partData = useSelector(state => state.main.partInfo);
  console.log('partData', partData);
  const [isProfileBtnActive] = useState(true);
  let { name, age, location, income, headset, profession, type } = partData;
  console.log(partData, 'profession')

  const isLoading = useSelector(state => state.auth.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    PartProfileInfo()(dispatch);
  }, []);

  const formIsValid = (props) => {
    EditParticipantProfile({
      ...props,
    })(dispatch);
  };

  const layout = { labelCol: { span: 20 }, wrapperCol: { span: 16 } };

if (!type) return <Skeleton active />

  return <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <div className="root-PartProfile">
          <Header
            profile={"/participant-profile"}
            studies={"/participant-studies"}
            disableButtons={!name || !age || !location || !income || !headset || !profession}
            isProfileBtnActive={isProfileBtnActive}
          />
          <div className="participant-profile__personal-info-block">
            <div className="participant-profile__wrapper">
              <div className="participant-profile__personal-heading">
                Profile Information
              </div>
              <div className="participant-profile__fields">
                <Form
                  {...layout}
                  name="control-hooks"
                  initialValues={{
                    name,
                    age,
                    location: location ? location : undefined,
                    income,
                    headset: headset ? headset : undefined,
                    profession: profession ? profession : undefined
                  }}
                  onFinish={formIsValid}
                >
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: "Please input name!" }]}
                  >
                    <Input placeholder="Type here.." />
                  </Form.Item>
                  <Form.Item
                    name="age"
                    label="Age"
                    rules={[{ required: true, message: "Please input age!" }]}
                  >
                    <InputNumber min={10} max={100} className="input-number" placeholder=" Please select age"/>
                  </Form.Item>
                  <Form.Item
                    className="personal-stats__fields-wrapper"
                    label="Location"
                    name="location"
                    rules={[
                      { required: true, message: "Please choose location!" },
                    ]}
                  >
                      <Select
                        mode="multiple"
                        placeholder="Please select location"
                        optionLabelProp="label"
                      >
                      {countryVariants.map((c) => (
                        <Select.Option
                          value={c.value}
                          label={c.label}
                          key={c.value}
                        >
                          <div className="demo-option-label-item">
                            {c.value}
                          </div>
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="income"
                    label="Average Income(USD)"
                    rules={[
                      { required: true, message: "Please input Income(USD)!" },
                    ]}
                  >
                    <InputNumber placeholder="Average income" max={500000} />
                  </Form.Item>
                  <Form.Item
                    className="personal-stats__fields-wrapper"
                    label="Main VR Headset"
                    name="headset"
                    rules={[
                      { required: true, message: "Please choose location!" },
                    ]}
                  >
                    <Select
                      mode="multiple"
                      placeholder="Please select headsets"
                      optionLabelProp="label"
                    >
                      {headsetsVariants.map((c) => (
                        <Select.Option
                          value={c.value}
                          label={c.label}
                          key={c.value}
                        >
                          <div className="demo-option-label-item">
                            {c.value}
                          </div>
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    className="personal-stats__fields-wrapper"
                    label="Profession"
                    name="profession"
                    rules={[
                      { required: true, message: "Please choose location!" },
                    ]}
                  >
                    <Select
                      mode="multiple"
                      placeholder="Please select profession"
                      multiple
                    >
                      {professionsList.map( p => (
                        <Select.Option value={p.value} title={p.label} key={p.value}> 
                          {p.value}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item className="personal-stats__fields-wrapper">
                    <div className="participant-profile__changes-btns">
                      <Button
                        className="participant-profile__save-btn"
                        type="primary"
                        htmlType="submit"
                      >
                        {isLoading ? <Loader /> : "Save changes"}
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
      )}
    </>
};

const AuthRedirectComponent = WithAuthRedirect(ParticipantProfile);

export default AuthRedirectComponent;
