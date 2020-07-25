/* eslint-disable */
import React, { useEffect } from "react";
import { Input, Button, Form } from 'antd'
import WithAuthRedirect from "../../../../hoc/hoc";
import { EditResearcherProfile, ResearcherProfileInfo } from '../../../../modules/session/main-reducer'
import Loader from '../../../Loader/loader'
import "./researcherProfile.scss";
import { useDispatch, useSelector } from 'react-redux'
import Header from "./../header";


const ResearcherProfile = () => {

  const userData = useSelector(state => state.main.userInfo)

  const { name, school, area } = userData

  const isLoading = useSelector(state => state.auth.isLoading)
  let dispatch = useDispatch()

  let token = localStorage.getItem('userLoginToken')

  useEffect(() => {ResearcherProfileInfo(token)(dispatch)}, [])

  const layout = {
    labelCol: {
      span: 16,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const formIsValid = (props) => {
    console.log('props', props)
    EditResearcherProfile({ ...props })(dispatch);
  }

  return <>
    {isLoading ? <Loader /> :
    <div className="root-ResearcherProfile">
        <Header profile={'researcher-profile'} studies={'researcher-studies'} disableButtons={!!(!name || !area || !school)}/>
      <div className="researcher-profile__personal-fields-wrapper">
        <div className="researcher-profile__personal-heading">Profile Information</div>
        <Form {...layout}name="control-hooks"
          onFinish={formIsValid}
          initialValues={{
            'name': name,
            'school': school,
            'area': area,
          }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input name!' }]}
          >
            <Input placeholder="Type here.."/>
          </Form.Item>
          <Form.Item
            name="school"
            label="School/Institution Name"
            rules={[{ required: true, message: 'Please input School/Institution Name!' }]}
          >
            <Input placeholder="Type here.."/>
          </Form.Item>
          <Form.Item
            name="area"
            label="Area"
            rules={[{ required: true, message: 'Please input area!' }]}
          >
            <Input placeholder="Type here.." />
          </Form.Item>
          <Form.Item>
            <div className="researcher-profile__changes-btns" style={{ marginTop: 25 }}>
                <Button className="researcher-profile__save-btn" type="primary" htmlType="submit" >
                {isLoading ? <Loader /> : 'Save changes'}
              </Button>
              <Button className="researcher-profile__cancel-btn">
                Cancel
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
      </div>
}
</>
}

const AuthRedirectComponent = WithAuthRedirect(ResearcherProfile)

export default AuthRedirectComponent
