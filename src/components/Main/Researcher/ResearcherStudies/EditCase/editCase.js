/* eslint-disable */
import React, { useEffect, useState } from "react"
import { Button, Input,  InputNumber,  Slider,  Select,  Form,  Skeleton } from "antd"
import { countryVariants,  headsetsVariants,  professionsList } from "../../../../../modules/session/data"
import { AllCasesInfo, EditCaseInfo, FileUpload } from '../../../../../modules/session/cases-reducer'
import Loader from "../../../../Loader/loader"
import { useDispatch, useSelector } from "react-redux"
import userImg from '../../../../../images/user.svg'
import Header from '../../header'

import { Link, useHistory } from 'react-router-dom'
import { AddCaseFiles } from '../../../../../api'
const { TextArea } = Input;

const EditCase = ({ id }) => {
  const allCaseStudies = useSelector((state) => state.cases.allCaseStudies);

  const isLoading = useSelector((state) => state.auth.isLoading);
  const [filteredCases, setFilteredCases] = useState({})
  const [avatar, setAvatar] = useState(null)

  let dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const filtredData = allCaseStudies?.filter(item => item._id === id)

    setFilteredCases(filtredData.length ? filtredData[0] : {})
  }, [allCaseStudies])

  useEffect(() => {
    AllCasesInfo()(dispatch);
  }, []);

  const successFillForm = (props) => {
    EditCaseInfo({ ...props, id, history })(dispatch);
  };
  const layout = {
    labelCol: { span: 20 },
    wrapperCol: { span: 16 },
  };
  const [isStudiesBtnActive] = useState(true);
  const loadFile = (e) => {
    let output = document.getElementById('output');
    output.src = URL.createObjectURL(e.target.files[0]);
  };

  return <>
    {!filteredCases.title ?
      <Skeleton active />
      :
      <div className="root-EditCase">
        <Header isStudiesBtnActive={isStudiesBtnActive}/>
        <div className="personal-stats__wrapper">
          <div className="personal-stats__block">
            <div className="personal-stats__personal-heading">
              Edit Research Studies
            </div>
            <div className='case-study-image'>
              {/*<img src={filteredCases.avatarUrl || userImg}*/}
              {/*     style={{width: 200, height: 200, borderRadius: '50%'}}*/}
              {/*     alt="userImg"*/}
              {/*/>*/}
            </div>
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
                title: filteredCases.title,
                description: filteredCases.description,
                location: filteredCases.location,
                age: filteredCases.age,
                income: filteredCases.income,
                participant: filteredCases.participant,
                headset: filteredCases.headset,
                profession: filteredCases.profession,
              }}
              onFinish={successFillForm}
            >
              <Form.Item name="avatarUrl">
                <img id="output" src={filteredCases.avatarUrl || userImg}
                     style={{width: 200, height: 200, borderRadius: '50%'}}
                     alt="userImg"/>
                <input type="file" id="basic_avatarUrl"
                       accept="image/*"
                       onChange={(e) => loadFile(e)}/>
                {/*<Input type="file" id="input" multiple />*/}
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
                    rules={[
                      {
                        required: true,
                        message: "Please input title!",
                      },
                    ]}
                  >
                    <Input placeholder="Title" />
                  </Form.Item>
                  <Form.Item
                    className="personal-stats__fields-wrapper"
                    label="Description"
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please input description!",
                      },
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
                      placeholder="Location"
                      optionLabelProp="label"
                      style={{ width: "100%" }}
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
                </div>
                <div className="personal-stats__right-block">
                  <Form.Item
                    className="personal-stats__fields-wrapper"
                    label="Age"
                    name="age"
                    rules={[
                      {
                        required: true,
                        message: "Please input range of age",
                      },
                    ]}
                  >
                    <Slider range />
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
                    label="Number of participants"
                    name="participant"
                    rules={[
                      {
                        required: true,
                        message: "Please choose headset!",
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
                      placeholder="Headsets"
                      optionLabelProp="label"
                      style={{ width: "100%" }}
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
                    label="Professions"
                    name="profession"
                  >
                    <Select
                      mode="multiple"
                      placeholder="List of professions"
                      optionLabelProp="label"
                      style={{ width: "100%" }}
                    >
                      {professionsList.map((c) => (
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
                </div>
              </div>
              <Form.Item>
                <div className="personal-stats__footer-btns">
                  <Button
                    type="primary"
                    className="personal-stats__create-research-btn"
                    htmlType="submit"
                  >
                    {isLoading ? <Loader /> : "Save Changes"}
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
    }
  </>
};

export default EditCase;






