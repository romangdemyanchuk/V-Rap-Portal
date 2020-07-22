/* eslint-disable */
import React, { useState } from 'react'
import userImg from "../../../../../images/user.svg";
import { Link } from "react-router-dom";
import { Input, Button, Slider, InputNumber, Cascader, Upload, Form } from 'antd'
import WithAuthRedirect from '../../../../../hoc/hoc';
const { TextArea } = Input;
import "./createNewCase.scss";
import { countryVariants, headsetsVariants, professionsList } from '../../../../../modules/session/data'
import { NewCaseInfo } from '../../../../../modules/session/session-reducers'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../../Loader/loader'

const CreateNewCase = () => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState([0, 0]);
  const [avgIncome, setAvgIncome] = useState([0, 0]);
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

  const layout = {
    labelCol: { span: 16 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
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
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={() => NewCaseInfo({
              title: title, description: descr, location: location,
              age: age, income: avgIncome, participant: parNum, headset: headsets, listOfProfessions: listOfProfessions
            })(dispatch)}
          >
            <div className="personal-stats__blocks-wrapper">
              <div className="personal-stats__left-block">
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Title"
                  name="title"
                  rules={[{ required: true, message: 'Please input title!' }]}
                >
                  <Input placeholder="Title"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                  />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Description"
                  name="descr"
                  rules={[{ required: true, message: 'Please input description!' }]}
                >
                  <TextArea placeholder="Type here" rows={3} className="personal-stats-area"
                    onChange={e => setDescr(e.target.value)}
                    value={descr}
                  />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Location"
                  name="location"
                  rules={[{ required: true, message: 'Please choose location!' }]}
                >
                  <Cascader options={countryVariants} placeholder="--Countries--"
                    onChange={cascaderLocationChange}
                    value={location}
                  />
                </Form.Item>

              </div>
              <div className="personal-stats__right-block">
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Age"
                  name="age"
                  rules={[{ required: true, message: 'Please input range of age' }]}
                >
                  <Slider range
                    onChange={ageRangeChange}
                    defaultValue={age}
                  />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Average Income"
                  name="avgIncome"
                  rules={[{ required: true, message: 'Please input range of Average Income!' }]}
                >
                  <Slider range
                    onChange={avgRangeChange}
                    defaultValue={avgIncome}
                  />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Required number of participants"
                  name="parNum"
                  rules={[{ required: true, message: 'Please input number of participants!' }]}
                >
                  <InputNumber min={1} max={300}
                    defaultValue={100}
                    className="input-number"
                    onChange={parNumberChange}
                    value={parNum}
                  />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Supported headsets"
                  name="headsets"
                  rules={[{ required: true, message: 'Please choose headset!' }]}
                >
                  <Cascader options={headsetsVariants} placeholder="--Headsets--"
                    onChange={cascaderHeadsetsChange}
                    value={headsets}
                  />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Proffessions"
                  name="proffessions"
                  rules={[{ required: true, message: 'Please choose profession!' }]}
                >
                  <Cascader options={professionsList} placeholder="--Professions--"
                    onChange={cascaderlistOfProfessionsChange}
                    style={{}}
                  />
                </Form.Item>

              </div>
            </div>
            <Form.Item
              className="personal-stats__footer-btns"
            >
              <Button type="primary" htmlType="submit" className="personal-stats__create-research-btn"
              // onClick={() => NewCaseInfo({
              //   title: title, description: descr, location: location,
              //   age: age, income: avgIncome, participant: parNum, headset: headsets, listOfProfessions: listOfProfessions
              // })(dispatch)}
              >
                {isLoading ? <Loader /> : 'Create Research Study'}
              </Button>
              <Link to={'/researcher-profile'}>
                <Button>Close Page</Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(CreateNewCase)

export default AuthRedirectComponent;
