/* eslint-disable */
import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Loader from '../../Loader/loader'
import "./participantRegisterForm.css";
import { useDispatch, useSelector } from 'react-redux'
import { ApiRegisterRequest } from '../../../modules/session/session-reducers'
import { Loading } from '../../../modules/session/session-actions'
import { infoAction } from '../../../utils/notification'

const ParticipantRegisterForm = ({ setState }) => {
  let dispatch = useDispatch()

  const isAuthCheck = useSelector(state => state.isAuth)
  const isLoading = useSelector(state => state.isLoading)

  if (isAuthCheck) {
    return infoAction('Successfully registered, please log In :)', '/')
  }

  const handleSubmit = (values) => {
    ApiRegisterRequest(values)(dispatch);
    dispatch(Loading(true))
  }

  return <>
    <div className="participant-register__form-wrapper">
      <div className="participant-heading">
        V-RAP: Participant
          </div>
      <div className="participant-register__login-btns">
        <Button className="participant-register__research-btn" onClick={() => setState(false)}>
          Login
          </Button>
        <Button className="participant__btn active">
          Register
          </Button>
      </div>
      <Form
        onFinish={values => { handleSubmit(values) }}
        name="login"
        className="login-form"
      >
        <Form.Item
          validateTrigger={'onBlur'}
          name="login"
          rules={[{ type: 'email', message: 'Please enter valid email: name@post.com' },
          { required: true, message: 'Field is required!' },
          ]}
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
          <Button type="primary" htmlType="submit" >
            {/*{isLoading ? <Loader/> : */}
                  Register
                {/*}*/}
          </Button>
        </Form.Item>
      </Form>
    </div>
  </>
}

export default ParticipantRegisterForm;
