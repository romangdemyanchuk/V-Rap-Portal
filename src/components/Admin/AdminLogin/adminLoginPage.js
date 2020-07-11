/* eslint-disable */
import React, { useState } from "react";
import "./adminLoginPage.css";
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux'
import { ApiLoginRequest } from "../../../modules/session/session-reducers";

const AdminLoginForm = () => {

  const testData = useSelector(state => state.adminLoginData)
  console.log(testData, 'state')

  const [loginText, setloginText] = useState("");
  const [passwordText, setpasswordText] = useState("");
  const [isEmailFieldValid, setIsEmailFieldValid] = useState(true);
  const [isPasswordFieldValid, setIsPasswordFieldValid] = useState(true);

  const emailIsValid = (e) => {
    if (e && e.target) setloginText(e.target.value);
    return setIsEmailFieldValid(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    )
  }

  const passwordIsValid = (e) => {
    if (e && e.target) setpasswordText(e.target.value);
    return setIsPasswordFieldValid(
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/
    )
  }

  // const LoginFieldsIsValid = () => {
  //   emailIsValid(loginText);
  //   passwordIsValid(passwordText);
  // }

  // const caseStudiesColumns = useSelector(state => state.caseStudiesColumns)
  let dispatch = useDispatch()

  return (
    <div className="root-Admin">
      <div className="root-Admin__wrapper">
        <div className="root-Admin__heading">V-RAP: Administration</div>
        <Form onFinish={values => { ApiLoginRequest(values)(dispatch) }}
          name="normal_login"
          className="login-form"
        >
          <div className="root-Admin__item-wrapper">
            <Form.Item name="login" >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type='email'
                placeholder="E-mail"
                onBlur={emailIsValid}
                value={loginText}
              />
            </Form.Item>
            {!isEmailFieldValid && <div className="invalid-email">Invalid E-mail</div>}
          </div>
          <div className="root-Admin__item-wrapper">
            <Form.Item
              name="password"
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onBlur={passwordIsValid}
                value={passwordText}
              />
            </Form.Item>
            {!isPasswordFieldValid && <div className="invalid-password">
              Enter at least 6 symbols. Message will be rewritten</div>}
          </div>

          <Form.Item>
            {/* <Link to={"/admin-portal"}> */}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            {/* </Link> */}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
