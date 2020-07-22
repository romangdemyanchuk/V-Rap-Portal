/*eslint-disable*/
import {
    LOGIN, REGISTER, LOADING, ADD_CASE,
    DELETE_CASE, USER_INFO, PART_INFO,
    ALL_CASES,
} from './session-constants'

export const Login = data => ({ type: LOGIN, payload: data })
export const Register = data => ({ type: REGISTER, payload: data })
export const Loading = data => ({ type: LOADING, payload: data })
export const addCase = data => ({ type: ADD_CASE, payload: data })
export const deleteCase = data => ({ type: DELETE_CASE, payload: data })
export const UserInfo = data => ({ type: USER_INFO, payload: data })
export const PartInfo = data => ({ type: PART_INFO, payload: data })
export const AllCases = data => ({ type: ALL_CASES, payload: data })
