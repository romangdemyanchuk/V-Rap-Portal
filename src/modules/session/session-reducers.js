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
    }
  )
}
