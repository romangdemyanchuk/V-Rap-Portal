/* eslint-disable */
import React from "react";
import { message, Button, Modal, Input, Form } from 'antd'
import "antd/dist/antd.css";
import "./researcherCreate.css";
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import Loader from '../../../../Loader/loader'
import {RegisterRequest } from '../../../../../modules/session/auth-reducer'
import { Loading } from '../../../../../modules/session/session-actions'
import { useDispatch, useSelector } from 'react-redux'

const ResearcherCreate = ({ modalOpen, setmodalOpen }) => {
  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch()
  
  const closeModal = () => {
    setmodalOpen(false);
  }
  // const props = {
  //   name: "file",
  //   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //   headers: {
  //     authorization: "authorization-text",
  //   },
  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       setmodalOpen(false);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };

  const handleSubmit = (values) => {
    console.log(values)
    RegisterRequest(values)(dispatch);
    dispatch(Loading(true))
  }
  return <div className="root-ResearcherCreate">
    <Modal
      title="Create Researcher"
      visible={modalOpen}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <Form onFinish={values => { handleSubmit(values) }}
            name="normal_login"
            className="login-form"
      >
        <div className="root-Admin__item-wrapper res-create-login">
          <Form.Item name="login"
                     rules={[{ type: 'email', message: 'Please enter valid email: name@post.com' },
                       { required: true, message: 'Enter researcher e-mail!' }]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type='email'
              placeholder="E-mail"
            />
          </Form.Item>
        </div>
        <div className="root-Admin__item-wrapper">
          <Form.Item
            name="password"
            rules={[{ min: 6, message: 'Password should contain at least 6 symbols' },
              { required: true, message: 'Enter researcher password!' }]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </div>
        <Form.Item>
          <div className="research-create__changes-btns research-modal-btns">
            <Button type="danger" className="research-create__cancel-btn"
                    onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              className="research-create__save-btn"
              type="primary"
              htmlType="submit"
              onClick={closeModal}
            >
              {isLoading ? <Loader /> : 'Create'}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  </div>
};
export default ResearcherCreate;
