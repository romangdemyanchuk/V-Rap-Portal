/* eslint-disable */
import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom";
import { Input, Button, Form} from "antd";
import WithAuthRedirect from "../../../../hoc/hoc";
import { ApiEditUserInfo, ApiUserInfo, LoadingAC } from '../../../../modules/session/session-reducers'
import Loader from '../../../Loader/loader'
import "./researcherProfile.scss";
import { useDispatch, useSelector } from 'react-redux'

const ResearcherProfile = () => {
  const [nameField, setnameField] = useState('');
  const [schoolField, setschoolField] = useState('');
  const [areaField, setareaField] = useState('');

  const isLoading = useSelector(state => state.isLoading)
  const userData = useSelector(state => state.userInfo)
  console.log(userData)

  let dispatch = useDispatch()

  useEffect(() => {
    ApiUserInfo()(dispatch)
  }, [])

  const resetFieldsValue = () => {
    setnameField('')
    setschoolField('')
    setareaField('')
  }
  const layout = {
    labelCol: {
      span: 16,
    },
    wrapperCol: {
      span: 16,
    },
  };
    return (
      <div className="root-ResearcherProfile">
        <div className="researcher-profile__btns-wrapper">
          <Link to={'/researcher-profile'}>
            <Button className="profile-btn active researcher-profile__btn">Profile</Button>
          </Link>
          <Link to={'/researcher-studies'}>
            <Button className="research-btn">Research Studies</Button>
          </Link>
        </div>
        <div className="researcher-profile__personal-fields-wrapper">
          <div className="researcher-profile__personal-heading">Profile Information</div>
          <div className="researcher-profile__fields-wrapper">
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={() =>{ ApiEditUserInfo({name: nameField, school: schoolField, area: areaField})(dispatch)}}
            >
              <Form.Item
                label="Name"
                name="username"
                rules={[
                  {
                    required: true,
                    message: '\n' +
                      'field cannot be empty!',
                  },
                ]}
              >
                <Input placeholder="Type here.."
                       onChange={e => setnameField(e.target.value)}
                       value={userData ? userData.name : nameField}
                />
              </Form.Item>
              <Form.Item
                label="School/Institution Name"
                name="school"
                rules={[
                  {
                    required: true,
                    message: '\n' +
                      'field cannot be empty!',
                  },
                ]}
              >
                <Input placeholder="Type here.."
                       onChange={e => setschoolField(e.target.value)}
                       value={userData ? userData.school : ''}
                />
              </Form.Item>
              <Form.Item
                label="Area of Research"
                name="area"
                rules={[
                  {
                    required: true,
                    message: '\n' +
                      'field cannot be empty!',
                  },
                ]}
              >
                <Input placeholder="Type here.."
                       onChange={e => setareaField(e.target.value)}
                       value={userData ? userData.area : ''}
                />
              </Form.Item>
              <div className="researcher-profile__changes-btns">
                <Button  className="researcher-profile__save-btn" type="primary" htmlType="submit"
                        // onSubmit={() =>{ ApiEditUserInfo({name: nameField, school: schoolField, area: areaField})(dispatch)}}
                >
                  {isLoading ? <Loader/> :'Save changes'}
                </Button>
                <Button className="researcher-profile__cancel-btn"
                        onClick={resetFieldsValue}
                >
                  Cancel
                </Button>
              </div>
            </Form>


          </div>
          <div className="researcher-profile__fields-wrapper">
            {/*<p>School/Institution Name</p>*/}

          </div>
          <div className="researcher-profile__fields-wrapper">
            {/*<p>Area of Research</p>*/}

          </div>

        </div>
      </div>
    );
};

const AuthRedirectComponent = WithAuthRedirect(ResearcherProfile)

export default AuthRedirectComponent
