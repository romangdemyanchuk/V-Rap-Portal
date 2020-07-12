/* eslint-disable */
import React from 'react'
import "./researcherLoginForm.css"
import { Form, Input, Button } from "antd"
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { ApiLoginRequest } from '../../../modules/session/session-reducers'
import { Redirect } from 'react-router'

const ResearcherLogin = () => {

  const dispatch = useDispatch()
  const isAuthCheck = useSelector(state => state.isAuth)
  if (isAuthCheck) return <Redirect to={'/researcher-profile'} />

  return <>
    <div className="researcher-login__heading">
      V-RAP: Researcher
      </div>
    <Form
      onFinish={values => { ApiLoginRequest(values)(dispatch) }}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <Form.Item validateTrigger={'onBlur'} name="login"
        rules={[{ type: 'email', message: 'Please enter valid email: name@post.com' },
        { required: true, message: 'Field is required!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="E-mail"
        />
      </Form.Item>
      <Form.Item
        validateTrigger={'onBlur'}
        name="password"
        rules={[{ min: 6, message: 'Password should contain at least 6 symbols' },
        { required: true, message: 'Field is required!' }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
      </Form.Item>
    </Form>
  </>
}

export default ResearcherLogin;
