/* eslint-disable */
import React from 'react';
import ParticipantLoginForm from './ParticipantLogin'
import ParticipantRegisterForm from './ParticipantRegister'


const MainLogin = (props) => {
  
  const { registerForm } = props
  
    return <>
      {registerForm
        
        ?
        <ParticipantRegisterForm />
        :
        <ParticipantLoginForm />}
       </>
}

export default MainLogin
