/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { message, Button, Modal, Input, Form, Select, Slider, Skeleton } from 'antd'
import "antd/dist/antd.css";
import DeleteModal from "../../ListOfResearchers/ResearcherChanges/DeleteModal";
import {outPutBtn} from '../../../../../utils/output'
import "./caseStudiesChanges.css";
import { Link } from 'react-router-dom'
import store from '../../../../../modules/store/create-store'
import { AllCasesInfo, DeleteCaseInfo, EditCaseInfo } from '../../../../../modules/session/cases-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { countryVariants } from '../../../../../modules/session/data'
import { DeleteCaseApi } from '../../../../../api'
import { Redirect } from 'react-router'
import Loader from '../../../../Loader/loader'



const CaseStudiesChanges = ({ modalOpen, setmodalOpen, id }) => {
  // console.log(123, modalOpen)
  const [filteredCases, setFilteredCases] = useState({})
  const allCaseStudies = useSelector((state) => state.cases.allCaseStudies);
  let dispatch = useDispatch();
  useEffect(() => {
    const filtredInfo = allCaseStudies?.find(item => item._id === id)
    setFilteredCases(filtredInfo ? filtredInfo: {})
  }, [id])

  useEffect(() => {
    AllCasesInfo()(dispatch);
  }, []);
  const closeModal = () => {
    // setmodalOpen(false)
    setFilteredCases({})
  };
  const layout = {
    labelCol: { span: 20 },
    wrapperCol: { span: 16 },
  };
  const successFillForm = (props) => {
    EditCaseInfo({ ...props, id })(dispatch);
    // setmodalOpen(false)
    setFilteredCases({})
  };
  return (
    <>
      {filteredCases.title && (
        <Modal
          title="Admins Changes"
          visible={modalOpen}
          onOk={closeModal}
          onCancel={closeModal}
        >
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
              title: filteredCases.title,
              location: filteredCases.location,
              age: filteredCases.age,
              income: filteredCases.income,
              participant: filteredCases.status
            }}
            onFinish={successFillForm}
          >
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
              <Input placeholder="Title"/>
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
              <Slider range/>
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
              <Slider range min={0} max={500000}/>
            </Form.Item>
            <Form.Item
              className="personal-stats__fields-wrapper"
              label="Status"
              name="status"
            >
              <Input placeholder="Status"/>
            </Form.Item>
            <Form.Item>
              <div className="case-studies-changes">
                <div className="case-studies__changes-btns admin-modals-btns">
                  <Button
                    type="danger"
                    className="case-studies__cancel-btn"
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                  <Button className="save-btn"
                          type="primary"
                          htmlType="submit"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Form.Item>
          </Form>
        </Modal>
        )
      }
    </>

  );
};
export default CaseStudiesChanges;
