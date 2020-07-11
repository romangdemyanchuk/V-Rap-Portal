/* eslint-disable */
import { LOGIN, REGISTER } from './session-constants'
import { allData } from './data'
import { RegisterApi, LoginApi } from '../../api'

let { caseStudies, researchersList, researcherListColumns, caseStudiesColumns } = allData

const initialState = {
  caseStudies,
  researchersList,
  researcherListColumns,
  caseStudiesColumns,
  adminLoginData: [],
  adminRegisterData: '',
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
    default:
      return state;
  }
}

export default MainReducer

export const LoginAC = data => ({ type: LOGIN, payload: data })

export const RegisterAC = data => ({ type: REGISTER, payload: data })

export const ApiRegisterRequest = data => dispatch => {
  RegisterApi(data)
    .then(response => {
      if (response) {
        // localStorage.setItem('userLoginToken', response.token)
        dispatch(RegisterAC(response))
        // console.log(response, 'response')
        // localStorage.setItem('isAuth', true)
      }
    }
    )
}

export const ApiLoginRequest = data => dispatch => {
  LoginApi(data)
    .then(response => {
      if (response.statusText == "OK") {
        dispatch(LoginAC(response))
        localStorage.setItem('userLoginToken', response.data.token)
        console.log(response, 'response')
        localStorage.setItem('isAuth', true)
      }
    }
  )
}

// case 'LIST_OF_RESEARCHERS':
//       return {
//         ...state,
//         researchersList: action.payload
//       };
//     case 'LIST_OF_CASE_STUDIES':
//       return {
//         ...state,
//         caseStudies: action.payload
//       };
//     case 'LIST_OF_RESEARCHERS_COLUMNS':
//       return {
//         ...state,
//         researcherListColumns: action.payload
//       };
//     case 'LIST_OF_CASE_STUDIES_COLUMNS':
//       return {
//         ...state,
//         caseStudiesColumns: action.payload
//       };
//     case 'LIST_OF_ADMINS_LOGINS_INFO':
//       return {
//         ...state,
//         adminsLoginInfo: action.payload
//       };