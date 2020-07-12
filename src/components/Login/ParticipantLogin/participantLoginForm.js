/* eslint-disable */
import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import "./participantLoginForm.scss";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainLogin from '../Login'
import { useDispatch, useSelector } from 'react-redux';
import { ApiLoginRequest } from '../../../modules/session/session-reducers';


const ParticipantLoginForm = () => {
  const [registerForm, setRegisterForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const [loginText, setloginText] = useState("");
  const [passwordText, setpasswordText] = useState("");
  const [isEmailFieldValid, setIsEmailFieldValid] = useState(true);
  const [isPasswordFieldValid, setIsPasswordFieldValid] = useState(true);

  const typeOfForm = () => {
    setRegisterForm(true);
    setIsVisible(true)
  }

  let dispatch = useDispatch()
  const isAuthCheck = useSelector(state => state.isAuth)
  if (isAuthCheck) return <Redirect to={'/participant-profile'} />


  return (
    <div className="root-Participant-login">
      {isVisible && <MainLogin registerForm={registerForm} setRegisterForm={setRegisterForm} />}
      {!isVisible
        &&
        <div className="participant-login__form-wrapper">
          <div className="participant-login__heading">
            V-RAP: Participant
          </div>
          <div className="participant-login__btns">
            <Button className="participant-login__-btn"
              onClick={typeOfForm}
            >Register</Button>
            <Button className="participant__btn active"
            >Login</Button>
          </div>
          <Form
            name="login"
            className="login-form"
            onFinish={values => { ApiLoginRequest(values)(dispatch) }}
          >
            <div>
              <Form.Item
                name="login"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="E-mail" />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
            </div>
            <Form.Item>
              <Form.Item name="remember" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Login
                </Button>
              Or <a href="/"
                onClick={typeOfForm}
              >register now!</a>
            </Form.Item>
          </Form>
        </div>}
    </div>
  );
};
export default ParticipantLoginForm;
