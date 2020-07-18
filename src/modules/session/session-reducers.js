/* eslint-disable */
import { LOGIN, REGISTER, LOADING, ADD_CASE, USER_INFO, DELETE_CASE,
  CHANGE_STATUS, ALL_CASES, NUMBER_OF_DOWNLOADS, EDITING_CASE, PASSWORD_RECOVERY } from './session-constants'
import { allData } from './data'
import {
  RegisterApi,
  LoginApi,
  EditUserInfoApi,
  UserInfoApi,
  AddCaseApi,
  DeleteCaseApi,
  ChangeStatusApi, AllCasesApi, NumberOfDownloadsApi, EditingCaseApi, PasswordRecoveryApi,
} from '../../api'
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
  userInfo: {},
  statusNumber : null,
  numberOfDownloads: 0,
  newPassword: '',
  researcherStudies: [
    {
      id:1,
      heading: 'Research Study 1',
      info: 'Compatible Devices: ATC Vive, Oculus Rift / Rift' +
            'ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S',
      required: 'Required Headset',
      device: 'Compatible Devices: ATC Vive, Oculus Rift / Rift S'
    },
    {
      id:2,
      heading: 'Research Study 2',
      info: 'Compatible Devices: ATC Vive, Oculus Rift / Rift' +
        'ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S',
      required: 'Required Headset',
      device: 'Compatible Devices: ATC Vive, Oculus Rift / Rift S'
    },
    {
      id:3,
      heading: 'Research Study 3',
      info: 'Compatible Devices: ATC Vive, Oculus Rift / Rift' +
        'ATC Vive, Oculus Rift ATC Vive, Oculus Rift / Rift S',
      required: 'Required Headset',
      device: 'Compatible Devices: ATC Vive, Oculus Rift / Rift S'
    }
  ]
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
      researcherStudies: action.payload
    }
    case NUMBER_OF_DOWNLOADS:
      return {
        ...state,
        numberOfDownloads: action.payload
      }
  case PASSWORD_RECOVERY:
    return {
      ...state,
      newPassword: action.payload
    }
    default:
      return state;
  }
}
export default MainReducer

export const LoginAC = data => ({ type: LOGIN, payload: data })

export const RegisterAC = data => ({ type: REGISTER, payload: data })

export const LoadingAC = data => ({ type: LOADING, payload: data })

export const AddCaseAC = data => ({ type: ADD_CASE, payload: data })

export const DeleteCaseAC = data => ({ type: DELETE_CASE, payload: data })

export const ChangeStatusAC = data => ({ type: CHANGE_STATUS, payload: data })

export const AllCasesAC = data => ({ type: ALL_CASES, payload: data })

export const NumberOfDownloadsAC = data => ({ type: NUMBER_OF_DOWNLOADS, payload: data })

export const EditingCaseAC = data => ({ type: EDITING_CASE, payload: data })

export const PasswordRecoveryAC = data => ({ type: PASSWORD_RECOVERY, payload: data })

export const UserInfoAC = data => ({ type: USER_INFO, payload: data })

export const ApiRegisterRequest = data => dispatch => {
  RegisterApi(data)
    .then(response => {
      if (response) {
        dispatch(RegisterAC(response))
      }
    })
}

export const ApiEditUserInfo = data => dispatch => {
  EditUserInfoApi(data)
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
  AddCaseApi(data)
    .then(response => {
      dispatch(LoadingAC(true))
      if (response) {
        dispatch(AddCaseAC(response))
      }
    }).finally(() => {
    infoAction('You successfully create new study!', '/researcher-studies')
    dispatch(LoadingAC(false))
  })
  dispatch(LoadingAC(true))
}
export const ApiDeleteCaseInfo = (id) => dispatch => {
  DeleteCaseApi(id)
    .then(response => {
      if (response) {
        dispatch(DeleteCaseAC(response))
      }
    }).finally(() => {
    infoAction('Case study was successfully deleted!', '/researcher-studies')
  })
}
export const ApiChangeStatus = (id) => dispatch => {
  ChangeStatusApi(id)
    .then(response => {
      if (response) {
        dispatch(ChangeStatusAC(response))
      }
    })
}

export const ApiAllCasesInfo = () => dispatch => {
  AllCasesApi()
    .then(response => {
      if (response) {
        dispatch(AllCasesAC(response))
      }
    })
}

 export const NumberOfDownloads = (id) => dispatch => {
   NumberOfDownloadsApi(id)
     .then(response => {
       if (response) {
         dispatch(NumberOfDownloadsAC(response))
       }
     })
 }

 export const ApiEditingCase = (id, data) => dispatch => {
   EditingCaseApi(id, data)
     .then(response => {
       if (response) {
         dispatch(EditingCaseAC(response))
       }
     })
 }

export const ApiPasswordRecovery = (password, id) => dispatch => {
  PasswordRecoveryApi(password, id)
    .then(response => {
      if (response) {
        dispatch(PasswordRecoveryAC(response))
      }
    })
}

 export const ApiUserInfo = () => dispatch => {
  UserInfoApi()
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
        let  token = response.data.token;
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
