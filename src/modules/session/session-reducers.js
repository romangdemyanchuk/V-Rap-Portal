/* eslint-disable */
import {
  LOGIN, REGISTER, LOADING, ADD_CASE, USER_INFO,
  DELETE_CASE, CHANGE_STATUS, PART_INFO, ALL_CASES
} from './session-constants'
import { allData } from './data'
import {
  RegisterApi, LoginApi,
  EditUserInfoApi, UserInfoApi,
  AddCaseApi, DeleteCaseApi,
  AllCasesApi, EditCaseApi,
  PartInfoApi, EditPartApi, ChangePasswordApi, getAllUsers,
} from '../../api'
import {
  Register, Loading,
  Login, addCase, deleteCase,
  UserInfo, PartInfo, AllCases
} from './session-actions'
import { infoAction } from '../../utils/notification'
import { Redirect } from 'react-router-dom'
import React from 'react'

// let { caseStudies, researchersList, caseStudiesColumns } = allData

const initialState = {
  // caseStudies,
  // researchersList,
  // caseStudiesColumns,
  adminLoginData: [],
  adminRegisterData: '',
  loginError: '',
  isAuth: localStorage.getItem('isAuth'),
  isLoading: false,
  newCaseInfo: {},
  userInfo: {},
  partInfo: {},
  statusNumber: null,
  researcherStudies: [],
  allCaseStudies: [],
  listOfResearcher: []
}

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        adminLoginData: action.payload,
        isAuth: true
      }
      case ALL_RESEARCHERS:
      return {
        ...state,
        listOfResearcher: action.payload,
      }
      case LOGOUT:
      return {
        ...state,
        дщпЩгеИщщдуфт: action.payload,
      }
    case REGISTER:
      return {
        ...state,
        adminRegisterData: action.payload,
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
    case DELETE_CASE:
      return {
        ...state,
        researcherStudies: action.payload
      }
    case USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      }
    case PART_INFO:
      return {
        ...state,
        partInfo: action.payload
      }
    case CHANGE_STATUS:
      return {
        ...state,
        statusNumber: action.payload
      }
    case ALL_CASES:
      return {
        ...state,
        allCaseStudies: action.payload
      }
    default:
      return state;
  }
}
export default MainReducer
const LOGOUT = 'LOGOUT'
export const logOutAC = ({type: LOGOUT})

export const EditResearcherProfile = data => dispatch => {
  EditUserInfoApi(data)
    .then(response => {
      if (response) {
        dispatch(UserInfo(response))
      }
    }).catch(e => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, '/researcher-profile');
      }
    }).finally(() => {
      dispatch(Loading(false))
      infoAction('Your information is successfully updated!', '/researcher-profile')
    })
  dispatch(Loading(true))
}

export const EditParticipantProfile = data => dispatch => {
  EditPartApi(data)
    .then(response => {
      if (response) {
        infoAction('You successfully change your profile!', '/participant-profile')
        dispatch(PartInfo(response.data))
      }
    }).catch(e => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, '/participant-profile');
      }
    }).finally(() => {
      dispatch(Loading(false))

    })
  dispatch(Loading(true))
}

export const NewCaseInfo = data => dispatch => {
  console.log('data1', data)
  AddCaseApi(data)
    .then(response => {
      console.log('response', response)
      dispatch(Loading(true))
      if (response) {
        dispatch(addCase(response.data))
        infoAction('You successfully create new study!', '/researcher-studies')

      }
    }).catch(e => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, '/researcher-studies');
      }
    }).finally(() => {
    if (typeof window !== 'undefined') {
      window.location = '/researcher-studies'
    }

      dispatch(Loading(false))
    })
  dispatch(Loading(true))
}

export const EditCaseInfo = data => dispatch => {
  console.log(data);
  EditCaseApi(data)
    .then(response => {
      // dispatch(Loading(true))
      // if (response) {
      //   console.log('response', response);
      //   dispatch(AllCases(response.data))
      // }
    }).finally(() => {
      if (typeof window !== 'undefined') {
        window.location = '/researcher-studies'
      }
    infoAction('You successfully change your study!', '/researcher-studies')

      // dispatch(Loading(false))
    })
  // dispatch(Loading(true))
}

export const DeleteCaseInfo = id => dispatch => {
  DeleteCaseApi(id)
    .then(response => {
      if (response) {
        dispatch(deleteCase(response))
      }
    }).catch(e => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, '/researcher-studies');
      }
    }).finally(() => {
      infoAction('Case study was successfully deleted!', '/researcher-studies')
    })
}

export const ResearcherProfileInfo = (token) => dispatch => {
  UserInfoApi(token)
    .then(response => {
      dispatch(Loading(true))
      if (response.data) {
        const { area, name, school } = response.data;
        dispatch(UserInfo({ area, school, name }))
      }
    }).catch(e => {
       if (e.response.status === 401) {
         localStorage.clear();
         if (typeof window !== 'undefined') {
           window.location = '/'
         }
       }
    }).finally(() => {
      dispatch(Loading(false))
    })
}

export const PartProfileInfo = () => dispatch => {
  PartInfoApi()
    .then(response => {
      if (response.data) {
        const { name, age, location, income, headset } = response.data;
        dispatch(PartInfo({ name, age, location, income, headset }))
      }
    }).catch(e => {
      if (e.response.status === 401) {
        localStorage.clear();
        if (typeof window !== 'undefined') {
          window.location = '/'
        }
      }
   }).finally(() => {
      dispatch(Loading(false))
    })
}

export const LoginRequest = data => dispatch => {
  console.log(data)
  LoginApi(data)
    .then(response => {
      if (response.statusText == 'OK') {
        let token = response.data.token;
        localStorage.setItem('userLoginToken', token)
        localStorage.setItem('isAuth', true)
        dispatch(Login(response))
      }
    })
    .catch(e => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, '/participant-profile');
      }
    }).finally(() => {
      dispatch(Loading(false))
    })
}

export const RegisterRequest = data => dispatch => {
  console.log('data', data);
  RegisterApi(data)
    .then(response => {
      if (response) {
        dispatch(Register(response))
      }
      dispatch(Loading(false))
    })
    .catch(e => {
        if (e.response) {
          dispatch(Loading(false))
        }
      }
    )
}

export const AllCasesInfo = () => dispatch => {
  AllCasesApi()
    .then(response => {
      dispatch(Loading(true))
      if (response) {
        dispatch(AllCases(response.data))
      }
    }).catch(e => {
      if (e.response.status === 401) {
        localStorage.clear();
        if (typeof window !== 'undefined') {
          window.location = '/'
        }
      }
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, '/researcher-profile');
      }
    }).finally(() => {
      dispatch(Loading(false))
    })
  dispatch(Loading(true))
}

export const ChangePassword = (password) => dispatch => {
  ChangePasswordApi(password)
    .then(response => {
      dispatch(Loading(true))
      if (response) {
        dispatch(AllCases(response.data))
      }
    }).finally(() => {
      dispatch(Loading(false))
    })
  dispatch(Loading(true))
}

const ALL_RESEARCHERS = 'ALL-RESEARCHERS'

const allResearchersAC = (data) => ({type: ALL_RESEARCHERS, payload: data })


export const allResearchers = () => dispatch => {
  debugger
  getAllUsers()
    .then(response => {
      
      if (response) {
        dispatch(allResearchersAC(response.data))
      }
    })
}