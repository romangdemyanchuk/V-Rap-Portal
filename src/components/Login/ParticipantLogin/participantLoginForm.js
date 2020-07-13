/* eslint-disable */
import React from 'react'
import { Link } from "react-router-dom";
import Loader from '../../Loader/loader'
import "./participantLoginForm.scss";
import { Form, Input, Button, Checkbox} from "antd";
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import {infoAction} from '../../../utils/notification'
import { useDispatch, useSelector } from 'react-redux';
import { ApiLoginRequest, LoadingAC } from '../../../modules/session/session-reducers'

const ParticipantLoginForm = ({ setState }) => {

  let dispatch = useDispatch()

  const isAuthCheck = useSelector(state => state.isAuth)
  const isLoading = useSelector(state => state.isLoading)

  if (isAuthCheck) {
    return infoAction('Mission complete Participant :)', '/participant-profile')
  }

  const handleSubmit = (values) => {
    ApiLoginRequest(values)(dispatch);
    dispatch(LoadingAC(true))
  }

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
        onFinish={values => { handleSubmit(values) }}
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
          <Button type="primary" htmlType="submit">
            {isLoading ? <Loader/> : 'Login'}
          </Button>
          <span className='orRegister-proposal'>
          Or
          <Link to={'/participant-login'}
                onClick={() => setState(true)}>&ensp;register now!</Link>
          </span>
        </Form.Item>
      </Form>
    </>
}

export default ParticipantLoginForm;
