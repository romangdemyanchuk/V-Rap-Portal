/* eslint-disable */
import React from "react";
import Loader from '../../Loader/loader'
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux'
import { ApiLoginRequest, LoadingAC } from '../../../modules/session/session-reducers'
import "./adminLoginPage.css";

const AdminLoginForm = () => {
  let dispatch = useDispatch()

  const isLoading = useSelector(state => state.isLoading)

  const handleSubmit = (values) => {
    ApiLoginRequest(values)(dispatch);
    dispatch(LoadingAC(true))
  }

  return <div className="root-Admin__wrapper">
      <div className="root-Admin__heading">
        V-RAP: Administration
      </div>
        <Form onFinish={values => { handleSubmit(values) }}
          name="normal_login"
          className="login-form"
        >
        <div className="root-Admin__item-wrapper">
          <Form.Item name="login"
            rules={[{ type: 'email', message: 'Please enter valid email: name@post.com' },
              { required: true, message: 'Field is required!' }]}>
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
              { required: true, message: 'Field is required!' }]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            {isLoading ? <Loader/> : 'Login'}
          </Button>
        </Form.Item>
        </Form>
      </div>
}

export default AdminLoginForm;
