/* eslint-disable */
import { LOGIN, REGISTER, LOADING, EDIT_USER} from './session-constants'
import { allData } from './data'
import { RegisterApi, LoginApi, EditUserInfoApi } from '../../api'
import {infoAction} from '../../utils/notification'
import React from 'react'

let { caseStudies, researchersList, caseStudiesColumns } = allData

const initialState = {
  caseStudies,
  researchersList,
  caseStudiesColumns,
  adminLoginData: [],
  adminRegisterData: '',
  loginError: '',
  isAuth: localStorage.getItem('isAuth'),
  isLoading: false,
  editUsersInfo: {}
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
    case LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
  case EDIT_USER:
    console.log('action.payload', action.payload)
    return {
      ...state,
      editUsersInfo: action.payload
    }
    default:
      return state;
  }
}
export default MainReducer

export const LoginAC = data => ({ type: LOGIN, payload: data })

export const RegisterAC = data => ({ type: REGISTER, payload: data })

export const LoadingAC = data => ({ type: LOADING, payload: data })

export const EditUserInfoAC = data => ({ type: EDIT_USER, payload: data })

export const ApiRegisterRequest = data => dispatch => {
  RegisterApi(data)
    .then(response => {
      if (response) {
        dispatch(RegisterAC(response))
      }
    })
}
const userToken = localStorage.getItem("userLoginToken");

export const ApiEditUserInfo = data => dispatch => {
  EditUserInfoApi(userToken, data)
    .then(response => {
      if (response) {
        dispatch(EditUserInfoAC(response))
      }
    })
}

export const ApiLoginRequest = data => dispatch => {
  LoginApi(data)
    .then(response => {
      // if (response.statusText == 'OK') {
        dispatch(LoginAC(response))
        localStorage.setItem('userLoginToken', response.data.token)
        localStorage.setItem('isAuth', true)
      // }
    }
  )
    .catch(e => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, '/participant-profile');
      }
  }).finally(() => {
    dispatch(LoadingAC(false))
  })


}
