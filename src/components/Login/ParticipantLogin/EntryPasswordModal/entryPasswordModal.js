/* eslint-disable */
import React from "react";
import "./";
import { Button, Form, Input, Modal } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { ChangePassword} from '../../../../modules/session/session-reducers'
import { Loading } from '../../../../modules/session/session-actions'
import { infoAction } from '../../../../utils/notification'
import { useDispatch} from 'react-redux'

const EntryPasswordModal = ({ doubleEntryPasswordModal, setDoubleEntryPasswordModal, title }) => {
  const dispatch = useDispatch()
  const  closeModal = () => {
    setDoubleEntryPasswordModal(false);
  }
  const layout = {
    labelCol: { span: 32 },
    wrapperCol: { span: 16 },
  };

  const handleSubmit = (values) => {
    if(values.password1 === values.password2) {
      ChangePassword(values.password1)(dispatch);
      dispatch(Loading(true))
    }
    else {
      infoAction('Password do not match!', '/researcher-login')
      setDoubleEntryPasswordModal(false);
    }

  }
  return (
    <div className="forgotPasswordModal-block">
      <Modal
        title={title}
        visible={doubleEntryPasswordModal}
        onOk={closeModal}
        onCancel={closeModal}
        className="forgotPasswordModal"
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={values => { handleSubmit(values) }}
        >

          <Form.Item
            validateTrigger={'onBlur'}
            label="Enter new password"
            name="password1"
            rules={[{ min: 6, message: 'Password should contain at least 6 symbols' },
              { required: true, message: 'Field is required!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            validateTrigger={'onBlur'}
            label="The confirmation of a new password"
            name="password2"
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
            <div className="forgotPassword__btns">
              <Button onClick={closeModal}>Cancel</Button>
              <Button type="primary" htmlType="submit">Save</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
export default EntryPasswordModal;
