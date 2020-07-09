/* eslint-disable */
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./participantLoginForm.scss";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainLogin from '../Login'
const ParticipantLoginForm = () => {
  const [registerForm, setRegisterForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const typeOfForm = () => {
    setRegisterForm(true);
    setIsVisible(true)
  }
  return (
    <div className="container">
      <div className="main-page-wrapper">
        {isVisible && <MainLogin registerForm={registerForm} setRegisterForm={setRegisterForm}/>}
        {!isVisible && <div>
          <div className="form-wrapper">
            <div className="participant-heading">
              V-RAP: Participant
            </div>
            <div className="login-btns">
              <Button className="profile-btn "
                      onClick={typeOfForm}
              >Register</Button>
              {/*<Link to={'/participant-login'}>*/}
              <Button className="research-btn active"
                // onClick={typeOfForm}
              >Login</Button>
              {/*</Link>*/}
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
              </Form.Item>
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
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Link to={'/participant-profile'}>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Login
                  </Button>
                </Link>

                Or <a href=""
                      onClick={typeOfForm}
              >register now!</a>
              </Form.Item>
            </Form>
          </div>
        </div>}

      </div>
    </div>
  );
};
export default ParticipantLoginForm;
