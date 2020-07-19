import * as axios from 'axios'
/*eslint-disable*/

const baseURL = 'https://varapan.herokuapp.com/'

const instance = axios.create({
  baseURL
})

let token = localStorage.getItem('userLoginToken')

const instanceWithToken = () => axios.create({
  baseURL,
  headers: {
    'Authorization': token
  }
})

export const RegisterApi = (regData) => {
  return instance.post(`api/auth/register`, regData)
}

export const LoginApi = (loginData) => {
  return instance.post(`api/auth/login`, loginData)
}

export const EditUserInfoApi = (token, data) => {
  return instanceWithToken(token).post(`api/users/useredit`, data)
}

export const UserInfoApi = (token) => {
  return instanceWithToken(token).post(`api/users/user`, {})
}

export const AddCaseApi = (token, data) => {
  return instanceWithToken(token).post(`api/case/add`, data)
}

export const DeleteCaseApi = (id) => {
  return instanceWithToken().delete(`api/case/delete`, { data: { id: id } })
}

export const AllCasesApi = () => {
  return instance.get(`/api/case/cases`, { headers: { 'Authorization': token } })
}

export const ChangingStatus = (id) => {
  debugger
  return instanceWithToken().post(`/api/case/status`, {status: '3', id: id})
}
