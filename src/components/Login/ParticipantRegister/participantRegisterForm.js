/* eslint-disable */
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./participantRegisterForm.css";
import MainLogin from '../Login'

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
              <Button className="profile-btn active"
                // onClick={typeOfForm(true)}
              >Register</Button>
              {/*<Link to={'/participant-login'}>*/}
              <Button className="research-btn"
                      onClick={typeOfForm}
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
                <Link to={'/participant-profile'}>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Register
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>}

    </div>
  </div>

  );
};
export default ParticipantRegisterForm;



