/* eslint-disable */
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./researcherLoginForm.css";
import { Form, Input, Button } from "antd";

import { LockOutlined, UserOutlined } from '@ant-design/icons'


const ResearcherLogin = () => {
  const [loginText, setloginText] = useState("");
  const [passwordText, setpasswordText] = useState("");
  const [isEmailFieldValid, setIsEmailFieldValid] = useState(true);
  const [isPasswordFieldValid, setIsPasswordFieldValid] = useState(true);
  const emailIsValid = (e) => {
    if (e && e.target) setloginText(e.target.value);
    return setIsEmailFieldValid(
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/.test(
        e.target.value
      )
    );
  };
  const passwordIsValid = (e) => {
    if (e && e.target) setpasswordText(e.target.value);
    return setIsPasswordFieldValid(
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/.test(
        e.target.value
      )
    );
  };
  const LoginFieldsIsValid = () => {
    // if(emailIsValid && passwordIsValid) {}
  };
  return (
    <div className="root-Researcher-login">
      <div className="researcher-login__form-wrapper">
        <div className="researcher-login__heading">
          V-RAP: Researcher
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <div className="researcher-login__item-wrapper">
            <Form.Item
              name="username"
              // rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon"/>}
                onChange={() => setIsEmailFieldValid(true)}
                onBlur={emailIsValid}
                value={loginText}
                placeholder="E-mail"
              />
            </Form.Item>
            {!isEmailFieldValid && <div className="invalid-email">Invalid E-mail</div>}
          </div>
          <div className="researcher-login__item-wrapper">
            <Form.Item
              name="password"
              // rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={() => setIsPasswordFieldValid(true)}
                onBlur={passwordIsValid}
                value={passwordText}
              />
            </Form.Item>
            {!isPasswordFieldValid && <div className="invalid-password">Invalid Password<br/>
              Your password must have > 6 symbols, special character,lowercase letter and uppercase letter</div>}
          </div>
          <Form.Item>
            <Link to={'/researcher-profile'}>
              <Button type="primary" htmlType="submit" className="login-form-button"
                      onClick={LoginFieldsIsValid}>
                Login
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default ResearcherLogin;
