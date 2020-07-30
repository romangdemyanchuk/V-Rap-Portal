/* eslint-disable */
import React, { useState } from "react";
import {
  Input,
  Button,
  Slider,
  InputNumber,
  Upload,
  Form,
  message,
  Select,
} from "antd";
import WithAuthRedirect from "../../../../../hoc/hoc";
import "./createNewCase.scss";
import {
  countryVariants,
  headsetsVariants,
  professionsList,
} from "../../../../../modules/session/data";
import { NewCaseInfo } from "../../../../../modules/session/cases-reducer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../Loader/loader";
import Header from "../../header";
import { Link } from "react-router-dom";
import userPng from '../../../../../images/user.svg'

const CreateNewCase = () => {

  const { TextArea } = Input;
  let dispatch = useDispatch();

  const [isStudiesBtnActive] = useState(true);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const successFillForm = (props) => {
    const {
      title,
      income,
      description,
      location,
      participant,
      age,
      headset,
      profession,
    } = props;
    NewCaseInfo({title,description,location,age,income,participant,headset,profession},
    )(dispatch);
  };

  const layout = {
    labelCol: { span: 20 },
    wrapperCol: { span: 16 },
  };

  let token = localStorage.getItem("userLoginToken");
  
  
  const propsFiles = {
    name: 'project',
    action: 'https://varapan.herokuapp.com/api/case/add',
    method: 'post',
    headers: {
      authorization: token,
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  }

  return (
    <div className="root-PersonalStats">
      <Header isStudiesBtnActive={isStudiesBtnActive}/>
      <div className="personal-stats__wrapper">
        <div className="personal-stats__block">
          <div className="personal-stats__personal-heading">
            Create Research Studies
          </div>
          <div className='case-study-image'><img src={userPng} alt='case-study-png'/></div>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={successFillForm}
          >
            <Form.Item name="avatarUrl">
              <Input type="file" id="input" multiple />
            </Form.Item>
            <Form.Item name="inputVrFile">
             <Input type="file" id="input-vr" multiple />
            </Form.Item>
            <div className="personal-stats__blocks-wrapper">
              <div className="personal-stats__left-block">
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Title"
                  name="title"
                  rules={[{ required: true, message: "Please input title!" }]}
                >
                  <Input placeholder="Title" />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Description"
                  name="description"
                  rules={[
                    { required: true, message: "Please input description!" },
                  ]}
                >
                  <TextArea
                    placeholder="Type here"
                    rows={3}
                    className="personal-stats-area"
                  />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Location"
                  name="location"
                >
                  <Select
                    mode="multiple"
                    placeholder="List of countries"
                    optionLabelProp="label"
                  >
                    {countryVariants.map((c) => (
                      <Select.Option
                        value={c.value}
                        label={c.label}
                        key={c.value}
                      >
                        <div className="demo-option-label-item">{c.value}</div>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
              <div className="personal-stats__right-block">
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Age"
                  name="age"
                  rules={[
                    { required: true, message: "Please input range of age" },
                  ]}
                >
                  <Slider range min={0} max={100} />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Average Income(USD)"
                  name="income"
                  rules={[
                    {
                      required: true,
                      message: "Please input range of Average Income!",
                    },
                  ]}
                >
                  <Slider range min={0} max={500000} />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Required number of participants"
                  name="participant"
                  rules={[
                    {
                      required: true,
                      message: "Please input number of participants!",
                    },
                  ]}
                >
                  <InputNumber
                    min={1}
                    max={300}
                    placeholder="Number of participants"
                    className="input-number"
                  />
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Supported headsets"
                  name="headset"
                >
                  <Select
                    mode="multiple"
                    placeholder="List of headsets"
                    optionLabelProp="label"
                  >
                    {headsetsVariants.map((c) => (
                      <Select.Option
                        value={c.value}
                        label={c.label}
                        key={c.value}
                      >
                        <div className="demo-option-label-item">{c.value}</div>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  className="personal-stats__fields-wrapper"
                  label="Proffessions"
                  name="profession"
                >
                  <Select
                    mode="multiple"
                    placeholder="List of proffessions"
                    optionLabelProp="label"
                  >
                    {professionsList.map((c) => (
                      <Select.Option
                        value={c.value}
                        label={c.label}
                        key={c.value}
                      >
                        <div className="demo-option-label-item">{c.value}</div>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </div>
            <Form.Item>
              <div className="personal-stats__footer-btns create-case-btns">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="personal-stats__create-research-btn"
                >
                  {isLoading ? <Loader /> : "Create Research Study"}
                </Button>
                <Link to={"/researcher-studies"}>
                  <Button>Close</Button>
                </Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(CreateNewCase);

export default AuthRedirectComponent;
