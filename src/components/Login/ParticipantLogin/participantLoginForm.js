/* eslint-disable */
import React, {useState} from 'react'
import { Redirect } from "react-router-dom";
import Loader from '../../Loader/loader'
import "./participantLoginForm.scss";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined, SmileOutlined } from '@ant-design/icons';
import {infoAction} from '../../../utils/notification'
import { useDispatch, useSelector } from 'react-redux';
import { ApiLoginRequest } from '../../../modules/session/session-reducers';

const ParticipantLoginForm = ({ setState }) => {

  let dispatch = useDispatch()

  const isAuthCheck = useSelector(state => state.isAuth)

  if (isAuthCheck) {
    setisLoading(false);
    return infoAction('Mission complete Participant :)', '/participant-profile')
  }

  const isLoading = useSelector(state => state.isLoading)
  console.log(isLoading)


  return <>
      <div className="participant-login__heading">
        V-RAP: Participant
      </div>
      <span className="participant-login__btns">
        <Button className="participant__btn active">
            Login
        </Button>
        <Button className="participant-login__-btn" onClick={() => setState(true)}>
          Register
        </Button>
      </span>
      <Form
        name="login"
        className="login-form"
        onFinish={values => { ApiLoginRequest(values)(dispatch) }}
      >
      <Form.Item
        validateTrigger={'onBlur'}
          name="login"
          rules={[{ type: 'email', message: 'Please enter valid email: name@post.com' },
        { required: true, message: 'Field is required!' }]}
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
          <Form.Item name="remember" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            {isLoading ? <Loader/> : 'Login'}
          </Button>
          <span className='orRegister-proposal'>
          Or
          <a href="/">&ensp;register now!</a>
          </span>
        </Form.Item>
      </Form>
    </>
}

export default ParticipantLoginForm;
