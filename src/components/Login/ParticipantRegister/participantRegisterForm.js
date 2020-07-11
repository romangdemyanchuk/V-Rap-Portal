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
  const [loginText, setloginText] = useState("");
  const [passwordText, setpasswordText] = useState("");
  const [isEmailFieldValid, setIsEmailFieldValid] = useState(true);
  const [isPasswordFieldValid, setIsPasswordFieldValid] = useState(true);
  const typeOfForm = () => {
    setRegisterForm(false);
    setIsVisible(true)
  }

  const emailIsValid = (e) => {
    if (e && e.target) setloginText(e.target.value);
    return setIsEmailFieldValid(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
        e.target.value
      )
    );
  };
  // const passwordIsValid = (e) => {
  //   if (e && e.target) setpasswordText(e.target.value);
  //   return setIsPasswordFieldValid(
  //     /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/.test(
  //       e.target.value
  //     )
  //   );
  // };


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
            initialValues={{ remember: true }}
          >
            <div>
              <Form.Item
                name="login"
              // rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  onBlur={emailIsValid}
                  value={loginText}
                  placeholder="E-mail" />
              </Form.Item>
              {!isEmailFieldValid && <div className="invalid-email">Invalid E-mail</div>}
            </div>
            <div>
              <Form.Item
                name="password"
              // rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  // onBlur={passwordIsValid}
                  value={passwordText}
                />
              </Form.Item>
              {!isPasswordFieldValid && <div className="invalid-password">
                Password should contain at least 6 symbols</div>}
            </div>
            <Form.Item>
              {/* <Link to={'/participant-profile'}> */}
              <Button type="primary" htmlType="submit" className="login-form-button">
                Register
                </Button>
              {/* </Link> */}
            </Form.Item>
          </Form>
        </div>
      </div>}
    </div>

  );
};
export default ParticipantRegisterForm;



