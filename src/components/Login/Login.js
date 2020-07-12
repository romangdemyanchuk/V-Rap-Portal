/* eslint-disable */
import React, { useState } from 'react';
import ParticipantLoginForm from './ParticipantLogin'
import ParticipantRegisterForm from './ParticipantRegister'


const MainLogin = ({ registerForm }) => {
  
  let [state, setState] = useState(false)


  return <>
    {state
      ?
      <ParticipantRegisterForm setState={setState} />
      :
      <ParticipantLoginForm setState={setState}/>}
  </>
}

export default MainLogin
