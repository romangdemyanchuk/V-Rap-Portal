/* eslint-disable */
import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom";
import { Input, Button} from "antd";
import WithAuthRedirect from "../../../../hoc/hoc";
import { ApiEditUserInfo, ApiUserInfo, LoadingAC } from '../../../../modules/session/session-reducers'
import Loader from '../../../Loader/loader'
import "./researcherProfile.scss";
import { useDispatch, useSelector } from 'react-redux'
import { infoAction } from '../../../../utils/notification'

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
  const submitEditUserInfo = (values) => {
    ApiEditUserInfo(values)(dispatch);
    dispatch(LoadingAC(true))
  }
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
            <p>Name</p>
            <Input placeholder="Type here.."
                   onChange={e => setnameField(e.target.value)}
                   value={userData ? userData.name : nameField}
            />
          </div>
          <div className="researcher-profile__fields-wrapper">
            <p>School/Institution Name</p>
            <Input placeholder="Type here.."
                   onChange={e => setschoolField(e.target.value)}
                   value={userData ? userData.school : ''}
            />
          </div>
          <div className="researcher-profile__fields-wrapper">
            <p>Area of Research</p>
            <Input placeholder="Type here.."
                   onChange={e => setareaField(e.target.value)}
                   value={userData ? userData.area : ''}
            />
          </div>
          <div className="researcher-profile__changes-btns">
            <Button className="researcher-profile__save-btn" type="primary"
                    onClick={() =>{ ApiEditUserInfo({name: nameField, school: schoolField, area: areaField})(dispatch)}} >
              {isLoading ? <Loader/> :'Save changes'}
            </Button>
            <Button className="researcher-profile__cancel-btn"
                    onClick={resetFieldsValue}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
};

const AuthRedirectComponent = WithAuthRedirect(ResearcherProfile)

export default AuthRedirectComponent
