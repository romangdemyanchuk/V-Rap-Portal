/* eslint-disable */
import React, {useState} from "react";
import {Link } from "react-router-dom";
import { Input, Button} from "antd";
import WithAuthRedirect from "../../../../hoc/hoc";
import { ApiEditUserInfo} from '../../../../modules/session/session-reducers'
import "./researcherProfile.scss";
import { useDispatch } from 'react-redux'

const ResearcherProfile = () => {
  const [nameField, setnameField] = useState('');
  const [schoolField, setschoolField] = useState('');
  const [areaField, setareaField] = useState('');

  let dispatch = useDispatch()

  const resetFieldsValue = () => {
    setnameField('')
    setschoolField('')
    setareaField('')
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
                   value={nameField}
            />
          </div>
          <div className="researcher-profile__fields-wrapper">
            <p>School/Institution Name</p>
            <Input placeholder="Type here.."
                   onChange={e => setschoolField(e.target.value)}
                   value={schoolField}
            />
          </div>
          <div className="researcher-profile__fields-wrapper">
            <p>Area of Research</p>
            <Input placeholder="Type here.."
                   onChange={e => setareaField(e.target.value)}
                   value={areaField}
            />
          </div>
          <div className="researcher-profile__changes-btns">
            <Button className="researcher-profile__save-btn" type="primary"
                    onClick={() => ApiEditUserInfo({name: nameField, school: schoolField, area: areaField})(dispatch)}>
              Save changes
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
