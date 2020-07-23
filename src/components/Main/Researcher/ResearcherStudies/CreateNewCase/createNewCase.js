/* eslint-disable */
import React, { useState } from 'react'
import userImg from "../../../../../images/user.svg";
import { Link } from 'react-router-dom'
import { Input, Button, Slider, InputNumber, Cascader, Upload, Form, TreeSelect, message } from 'antd'
const { TreeNode } = TreeSelect;
import WithAuthRedirect from '../../../../../hoc/hoc';
const { TextArea } = Input;
import "./createNewCase.scss";
import { countryVariants, headsetsVariants, professionsList } from '../../../../../modules/session/data'
import { NewCaseInfo } from '../../../../../modules/session/session-reducers'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../../Loader/loader'
import Header from '../../header';

const CreateNewCase = () => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState([0, 0]);
  const [avgIncome, setAvgIncome] = useState([0, 0]);
  const [parNum, setParNum] = useState(100);
  const [headsets, setHeadsets] = useState([]);
  const [professions, setProfessions] = useState([]);
  // const [value, setValue] = useState('');
  let dispatch = useDispatch()

  const newCaseStudyInfo = useSelector(state => state.newCaseInfo)
  const isLoading = useSelector(state => state.isLoading)

  const headsetsChange = value => {
    setHeadsets(value)
  };
  const professionsChange = value => {
    setProfessions(value)
  };
  const ageRangeChange = (value) => {
    setAge(value);
  }
  const avgRangeChange = (value) => {
    setAvgIncome(value)
  }
  const parNumberChange = (value) => {
    setParNum(value);
  }
  // const headsetsChange = (value) => {
  //   setHeadsets(value);
  // }
  const cascaderLocationChange = (value) => {
    setLocation(value);
  }
  const cascaderlistOfProfessionsChange = (value) => {
    setListOfProfessions(value);
  }

  const uploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
  };
  const successFillForm = () => {
    NewCaseInfo({
      title: title, description: descr, location: location,
      age: age, income: avgIncome, participant: parNum, headset: headsets, professions: professions
    })(dispatch);
  }

  const layout = {
    labelCol: { span: 16 },
    wrapperCol: { span: 16 },
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="root-PersonalStats">
      <Header />
      <div className="personal-stats__wrapper">
        <div className="personal-stats__block">
          <div className="personal-stats__personal-heading">Create Research Studies</div>

          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={successFillForm}
          >
            <Form.Item
            >
              <div className="personal-stats__info-img">
                <img src={userImg} alt="userImg" />
                <div className="personal-stats__upload-btns">
                  <Upload {...props}>
                    <Button className="file-upload-btn" type="primary">
                      Upload Image
                    </Button>
                  </Upload>
                </div>
              </div>
            </Form.Item>
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
                  label="Average Income(USD)"
                  name="avgIncome"
                  rules={[{ required: true, message: 'Please input range of Average Income!' }]}
                >
                  <Slider range
                    max={10000000}
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
                  <TreeSelect
                    showSearch
                    style={{ width: '100%' }}
                    value={headsets}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    multiple
                    treeDefaultExpandAll
                    onChange={headsetsChange}
                  >
                    {headsetsVariants.map((item) =>
                    <TreeNode value={item.value} title={item.label} />
                    )}

                  </TreeSelect>
                  {/*<Cascader options={headsetsVariants} placeholder="--Headsets--"*/}
                  {/*  onChange={cascaderHeadsetsChange}*/}
                  {/*  value={headsets}*/}
                  {/*/>*/}
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Proffessions"
                  name="proffessions"
                  rules={[{ required: true, message: 'Please choose profession!' }]}
                >
                  <TreeSelect
                    showSearch
                    style={{ width: '100%' }}
                    value={professions}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    multiple
                    treeDefaultExpandAll
                    onChange={professionsChange}
                  >
                    {professionsList.map((item) =>
                      <TreeNode value={item.value} title={item.label} />
                    )}

                  </TreeSelect>
                </Form.Item>

              </div>
            </div>
            <Form.Item
              className="personal-stats__footer-btns"
            >
              {/*<Link to={'/researcher-studies'}>*/}
                <Button type="primary" htmlType="submit" className="personal-stats__create-research-btn">
                  {isLoading ? <Loader /> : 'Create Research Study'}
                </Button>
              {/*</Link>*/}
              <Link to={'/researcher-studies'}>
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
