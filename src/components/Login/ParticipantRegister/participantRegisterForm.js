/* eslint-disable */
import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./participantRegisterForm.css";
import MainLogin from '../Login'
import { useDispatch, useSelector } from 'react-redux';
import { ApiRegisterRequest } from '../../../modules/session/session-reducers';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const ParticipantRegisterForm = () => {
  const [registerForm, setRegisterForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false)

  const typeOfForm = () => {
    setRegisterForm(false);
    setIsVisible(true)
  }

  let dispatch = useDispatch()

  return (
    <div className="root-Participant-register">
      {isVisible && <MainLogin registerForm={registerForm} setRegisterForm={setRegisterForm} />}
      {!isVisible && <div>
        <div className="participant-register__form-wrapper">
          <div className="participant-heading">
            V-RAP: Participant
          </div>
          <div className="participant-register__login-btns">
            <Button className="participant__btn active"
            >Register</Button>
            <Button className="participant-register__research-btn"
              onClick={typeOfForm}
            >Login</Button>
          </div>
          <Form
            onFinish={values => { ApiRegisterRequest(values)(dispatch) }}
            name="login"
            className="login-form"
          >
            <Form.Item
              validateTrigger={'onBlur'}
              name="login"
              rules={[{ type: 'email', message: 'Please enter valid email: name@post.com' },
              { required: true, message: 'Field is required!' },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="E-mail" />
            </Form.Item>
            <Form.Item
              validateTrigger={'onBlur'}
              name="password"
              rules={[{ min: 6, message: 'Password should contain at least 6 symbols' },
              { required: true, message: 'Field is required!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Register
                </Button>
            </Form.Item>
          </Form>
        </div>
      </div>}
    </div>

  );
};
export default ParticipantRegisterForm;



