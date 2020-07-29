/* eslint-disable */
import React, { useEffect, useState } from "react";
import userImg from "../../../../../images/user.svg";
import {
  Button,
  Input,
  InputNumber,
  Slider,
  Upload,
  Select,
  Form,
  Skeleton,
} from "antd";
import {
  countryVariants,
  headsetsVariants,
  professionsList,
} from "../../../../../modules/session/data";
import {
  AllCasesInfo,
  EditCaseInfo,
} from "../../../../../modules/session/cases-reducer";
import Loader from "../../../../Loader/loader";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../header";
import { Link } from "react-router-dom";
const { TextArea } = Input;

const EditCase = ({ id }) => {
  const allCaseStudies = useSelector((state) => state.cases.allCaseStudies);
  const [isStudiesBtnActive] = useState(true);
  const isLoading = useSelector((state) => state.auth.isLoading);
  let filteredCases = [];

  let dispatch = useDispatch();

  if (allCaseStudies) {
    filteredCases = allCaseStudies?.filter((item) => {
      return item._id === id;
    });
  }
  console.log(filteredCases);
  filteredCases = filteredCases.length ? filteredCases[0] : [];

  useEffect(() => {
    AllCasesInfo()(dispatch);
  }, []);

  const successFillForm = (props) => {
    console.log(props);
    EditCaseInfo({ ...props, id: id })(dispatch);
  };

  const uploadProps = {
    action: "https://varapan.herokuapp.com/api/case/add",
  };
  const layout = {
    labelCol: { span: 20 },
    wrapperCol: { span: 16 },
  };

  // const props = {
  //   name: 'file',
  //   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  //   headers: {
  //     authorization: 'authorization-text',
  //   },
  //   onChange(info) {
  //     if (info.file.status === 'done') {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === 'error') {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };
  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <div className="root-EditCase">
          <Header isStudiesBtnActive={isStudiesBtnActive}/>
          <div className="personal-stats__wrapper">
            <div className="personal-stats__block">
              <div className="personal-stats__personal-heading">
                Edit Research Studies
              </div>
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                  id: id,
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
                <Form.Item>
                  <div className="personal-stats__info-img">
                    <img src={userImg} alt="userImg" />
                    <div className="personal-stats__upload-btns">
                      <Upload>
                        <Button className="file-upload-btn" type="primary">
                          Upload Image
                        </Button>
                      </Upload>
                    </div>
                  </div>
                </Form.Item>
                <Form.Item>
                  <div className="personal-stats__info-img">
                    <Upload {...uploadProps}>
                      <Button className="file-upload-btn">
                        Upload VR File
                      </Button>
                    </Upload>
                  </div>
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
      )}
    </>
  );
};

export default EditCase;
