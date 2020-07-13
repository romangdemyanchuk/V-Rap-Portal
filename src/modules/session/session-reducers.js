/* eslint-disable */
import { LOGIN, REGISTER, LOGIN_ERROR } from './session-constants'
import { allData } from './data'
import { RegisterApi, LoginApi } from '../../api'
import { notification } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
import {infoAction} from '../../components/utils/notification'
import { Redirect } from 'react-router-dom'
import React from 'react'

let { caseStudies, researchersList, caseStudiesColumns } = allData

const initialState = {
  caseStudies,
  researchersList,
  caseStudiesColumns,
  adminLoginData: [],
  adminRegisterData: '',
  loginError: '',
  isAuth: localStorage.getItem('isAuth')
}

const MainReducer = (state = initialState, action) => {
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
  case LOGIN_ERROR:
    return {
      ...state,
      loginError: action.payload,
    }
    default:
      return state;
  }
}

export default MainReducer

export const LoginAC = data => ({ type: LOGIN, payload: data })

export const RegisterAC = data => ({ type: REGISTER, payload: data })

export const LoginErrorAC = data => ({ type: LOGIN_ERROR, payload: data })

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
      if (response.statusText == "OK") {
        dispatch(LoginAC(response))
        localStorage.setItem('userLoginToken', response.data.token)
        localStorage.setItem('isAuth', true)
      }
      // if (response.message) {
      //   console.log(response.message);
      //   dispatch(LoginAC(response))
      // }
    }
  )
    .catch(e => {
      infoAction(e.response.data.message, '/participant-profile');
  })
}
