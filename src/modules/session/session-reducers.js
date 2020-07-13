/* eslint-disable */
import { LOGIN, REGISTER, LOADING} from './session-constants'
import { allData } from './data'
import { RegisterApi, LoginApi } from '../../api'
import ParticipantLoginForm from '../../components/Login/ParticipantLogin/participantLoginForm'
import {infoAction} from '../../utils/notification'
import { loadingInfo } from '../../components/Main/Participant/ParticipantProfile/participantProfile'
import React, { useState } from 'react'

let { caseStudies, researchersList, caseStudiesColumns } = allData

const initialState = {
  caseStudies,
  researchersList,
  caseStudiesColumns,
  adminLoginData: [],
  adminRegisterData: '',
  loginError: '',
  isAuth: localStorage.getItem('isAuth'),
  isLoading: false
}

const MainReducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        adminLoginData: action.payload,
        isAuth: true
      }
    case REGISTER:
      return {
        ...state,
        adminRegisterData: action.payload,
        isAuth: true,
      }
    case LOADING:

      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
}

export default MainReducer

export const LoginAC = data => ({ type: LOGIN, payload: data })

export const RegisterAC = data => ({ type: REGISTER, payload: data })

export const LoadingAC = data => ({ type: LOADING, payload: data })

export const ApiRegisterRequest = data => dispatch => {
  RegisterApi(data)
    .then(response => {
      if (response) {
        dispatch(RegisterAC(response))
      }
    })
}

export const ApiLoginRequest = data => dispatch => {
  LoginApi(data)
    .then(response => {
      if (response.statusText == 'OK') {
        dispatch(LoadingAC(true))
        dispatch(LoginAC(response))
        localStorage.setItem('userLoginToken', response.data.token)
        localStorage.setItem('isAuth', true)
        dispatch(LoadingAC(false))
      }
    }
  )
    .catch(e => {
      if (e.response.data) {
        infoAction(e.response.data.message, '/participant-profile');
      }
  })

}
