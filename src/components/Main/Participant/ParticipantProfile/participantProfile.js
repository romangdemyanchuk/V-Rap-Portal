/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Form, Skeleton } from 'antd'
import "./participantProfile.scss";
import WithAuthRedirect from "../../../../hoc/hoc";
import { countryVariants, headsetsVariants, professionsList} from "../../../../modules/session/data";
import { ChangeIsButtonDisabled, EditParticipantProfile, PartProfileInfo}
from '../../../../modules/session/main-reducer'
import { useDispatch, useSelector } from "react-redux";
import Header from "./../../Researcher/header";
import { infoAction } from '../../../../utils/notification'
import { useHistory } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import 'react-widgets/dist/css/react-widgets.css'
import { multiHeadset, multiLocation, multiProfession, required } from '../../../../utils/validators'
import { Input, InputSelectHeadset, InputSelectLocation, InputSelectProfession } from '../../../../utils/formControls'

const ParticipantProfileForm = (props) => {
  const countryList = [];
  { countryVariants.map((c) => (
    countryList.push(c.value)
  ))}
  const headsetList = [];
  { headsetsVariants.map((h) => (
    headsetList.push(h.value)
  ))}
  const professionList = [];
  { professionsList.map((p) => (
    professionList.push(p.value)
  ))}

  return (
    <form className="participant-profile-form"
          onSubmit={props.handleSubmit}>
      <div>
        <div><label>name</label></div>
        <Field placeholder='name' name="name" component={Input} validate={ required }/>
      </div>
      <div>
        <div><label>age</label></div>
          <Field placeholder='age' name="age" component={Input} validate={ required } type="number"/>
      </div>
      <div>
        <div><label>location</label></div>
        <Field placeholder='location'
               name="location" validate={ [multiLocation, required] }
               component={InputSelectLocation}
               data={countryList}/>
      </div>
      <div>
        <div><label>income</label></div>
        <Field placeholder='income' name="income" validate={ required } component={Input} type="number"/>
      </div>
      <div>
        <div><label>headset</label></div>
        <Field placeholder='headset'
               name="headset" validate={ [multiHeadset, required] }
               component={InputSelectHeadset}
               data={headsetList}/>
      </div>
      <div>
        <div><label>profession</label></div>
        <Field placeholder='profession'
               name="profession" validate={ [multiProfession, required] }
               component={InputSelectProfession}
               data={professionList}/>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}

const ParticipantProfileReduxForm = reduxForm ({ form: 'participant-profile'})(ParticipantProfileForm)

const ParticipantProfile = () => {
  const [form] = Form.useForm();
  const partData = useSelector(state => state.main.partInfo);
  const disableButtons = useSelector((state) => state.main.isDisableButtons);
  const isAuthCheck = useSelector(state => state.auth.isAuth)
  const history = useHistory();
  const [isProfileBtnActive] = useState(true);
  let { name, age, location, income, headset, profession, type  } = partData;
  let formInitialValues = {
    name: name,
    age: age,
    location: location  ? location : undefined,
    income: income,
    headset: headset  ? headset : undefined,
    profession: profession  ? profession : undefined
  }
  form.setFieldsValue(formInitialValues)

  const isLoading = useSelector(state => state.auth.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    PartProfileInfo(history)(dispatch);
  }, []);

  useEffect(() =>{
    if (name && age && location && income && headset && profession) {
      ChangeIsButtonDisabled(false)(dispatch)
    }
  }, [name, age, location, income, headset, profession, type])
    if (!isAuthCheck)
      return infoAction("YOY :)","/")

  const onSubmit = (formData) => {
    console.log('FORM', formData)
    EditParticipantProfile({...formData }, ChangeIsButtonDisabled)(dispatch);
  }

  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : isAuthCheck && (
        <div className="root-PartProfile">
          <Header
            profile={"/participant-profile"}
            studies={"/participant-studies"}
            disableButtons={disableButtons}
            isProfileBtnActive={isProfileBtnActive}
            type={0}
          />
          <div className="participant-profile__personal-info-block">
            <div className="participant-profile__wrapper">
              <div className="participant-profile__personal-heading">
                Profile Information
              </div>
              <div className="participant-profile__fields">
              </div>
              <ParticipantProfileReduxForm initialValues={formInitialValues} onSubmit={onSubmit}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ParticipantProfile);

export default AuthRedirectComponent;
