/* eslint-disable */
import { LOGIN, REGISTER, LOADING, ADD_CASE, USER_INFO, DELETE_CASE, CHANGE_STATUS } from './session-constants'
import { allData } from './data'
import {
  RegisterApi,
  LoginApi,
  EditUserInfoApi,
  UserInfoApi,
  AddCaseApi,
  DeleteCaseApi,
  ChangeStatusApi,
  AllCasesApi,
} from '../../api'
import { infoAction } from '../../utils/notification'

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
  userInfo: {},
  statusNumber: null,
  researcherStudies: [
    {
      id: 1,
      heading: 'Research Study 1',
      info: 'Compatible Devices: ATC Vive, Oculus Rift / Rift' +
        'ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S',
      required: 'Required Headset',
      device: 'Compatible Devices: ATC Vive, Oculus Rift / Rift S'
    },
    {
      id: 2,
      heading: 'Research Study 2',
      info: 'Compatible Devices: ATC Vive, Oculus Rift / Rift' +
        'ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S',
      required: 'Required Headset',
      device: 'Compatible Devices: ATC Vive, Oculus Rift / Rift S'
    },
    {
      id: 3,
      heading: 'Research Study 3',
      info: 'Compatible Devices: ATC Vive, Oculus Rift / Rift' +
        'ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S',
      required: 'Required Headset',
      device: 'Compatible Devices: ATC Vive, Oculus Rift / Rift S'
    }
  ],
  allCaseStudies: []
}

const ALL_CASES = "ALL_CASES"

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

export const LoginAC = data => ({ type: LOGIN, payload: data })

export const RegisterAC = data => ({ type: REGISTER, payload: data })

export const LoadingAC = data => ({ type: LOADING, payload: data })

export const addCaseAC = data => ({ type: ADD_CASE, payload: data })

export const deleteCaseAC = data => ({ type: DELETE_CASE, payload: data })

export const changeStatusAC = data => ({ type: CHANGE_STATUS, payload: data })

export const UserInfoAC = data => ({ type: USER_INFO, payload: data })

export const AllCasesAC = data => ({ type: ALL_CASES, payload: data })

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
  EditUserInfoApi(userToken, data)
    .then(response => {
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
  AddCaseApi(userToken, data)
    .then(response => {
      dispatch(LoadingAC(true))
      if (response) {
        dispatch(addCaseAC(response.data))
      }
    }).finally(() => {
      infoAction('You successfully create new study!', '/researcher-studies')
      dispatch(LoadingAC(false))
    })
  dispatch(LoadingAC(true))
}

export const ApiDeleteCaseInfo = id => dispatch => {
  DeleteCaseApi(id)
    .then(response => {
      dispatch(LoadingAC(true))
      if (response) {
        dispatch(deleteCaseAC(response))
      }
    }).finally(() => {
      infoAction('Case study was successfully deleted!', '/researcher-studies')
      dispatch(LoadingAC(false))
    })
  dispatch(LoadingAC(true))
}

export const ApiChangeStatus = (id, num_status) => dispatch => {
  ChangeStatusApi(id, num_status)
    .then(response => {
      if (response) {
        dispatch(changeStatusAC(response))
      }
    })
}


export const ApiUserInfo = () => dispatch => {
  UserInfoApi(userToken)
    .then(response => {
      console.log(response)
      if (response.data) {
        const { area, name, school } = response.data;
        dispatch(UserInfoAC({ area, school, name }))
      }
    }).finally(() => {
      dispatch(LoadingAC(false))
    })
}


export const ApiLoginRequest = data => dispatch => {
  LoginApi(data)
    .then(response => {
      if (response.statusText == 'OK') {
        let token = response.data.token;
        // let token = tokenData.substr(tokenData.indexOf(" ") + 1);
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

export const ApiAllCasesInfo = () => dispatch => {
  AllCasesApi()
    .then(response => {
      if (response) {
        dispatch(AllCasesAC(response.data))
      }
    })
}
