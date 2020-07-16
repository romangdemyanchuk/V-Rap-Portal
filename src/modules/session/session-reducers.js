/* eslint-disable */
import { LOGIN, REGISTER, LOADING, ADD_CASE, USER_INFO} from './session-constants'
import { allData } from './data'
import { RegisterApi, LoginApi, EditUserInfoApi, UserInfoApi, AddCaseApi } from '../../api'
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
  newCaseInfo: {},
  userInfo: {}
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
  case ADD_CASE:
    return {
      ...state,
      newCaseInfo: action.payload
    }
  case USER_INFO:
    return {
      ...state,
      userInfo: action.payload
    }
    default:
      return state;
  }
}
export default MainReducer

export const LoginAC = data => ({ type: LOGIN, payload: data })

export const RegisterAC = data => ({ type: REGISTER, payload: data })

export const LoadingAC = data => ({ type: LOADING, payload: data })

export const addCaseAC = data => ({ type: ADD_CASE, payload: data })

export const UserInfoAC = data => ({ type: USER_INFO, payload: data })

export const ApiRegisterRequest = data => dispatch => {
  RegisterApi(data)
    .then(response => {
      if (response) {
        dispatch(RegisterAC(response))
      }
    })
}
let userToken = localStorage.getItem("userLoginToken");

export const ApiEditUserInfo = data => dispatch => {
  // console.log(userToken);
  // console.log(data);
  EditUserInfoApi(userToken, data)
    .then(response => {
      console.log('response', response)
      if (response) {
        dispatch(UserInfoAC(response))
      }
    }).finally(() => {
    dispatch(LoadingAC(false))
    infoAction('Your information is successfully updated!', '/researcher-profile')
  })
  dispatch(LoadingAC(true))
}

export const ApiNewCaseInfo = data => dispatch => {
  console.log(userToken);
  AddCaseApi(userToken, data)
    .then(response => {
      console.log('response', response);
      if (response) {
        dispatch(addCaseAC(response))
      }
    })
}
export const ApiDeleteCaseInfo = data => dispatch => {
  DeleteCaseApi(userToken, data)
    .then(response => {
      console.log('response', response);
      if (response) {
        dispatch(addCaseAC(response))
      }
    })
}


export const ApiUserInfo = () => dispatch => {
  UserInfoApi(userToken)
    .then(response => {
      console.log(response)
      if (response.data) {
        const {area, name, school} = response.data;
        dispatch(UserInfoAC({area, school, name}))
      }
    }).finally(() => {
    dispatch(LoadingAC(false))
  })
}





export const ApiLoginRequest = data => dispatch => {
  LoginApi(data)
    .then(response => {
      if (response.statusText == 'OK') {
        let  tokenData = response.data.token;
        let token = tokenData.substr(tokenData.indexOf(" ") + 1);
        console.log('response.data.token', token)
        dispatch(LoginAC(response))
        localStorage.setItem('userLoginToken', token)
        localStorage.setItem('isAuth', true)
      }
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
