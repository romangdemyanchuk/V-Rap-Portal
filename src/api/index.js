import * as axios from 'axios'
/*eslint-disable*/

const baseURL = 'https://varapan.herokuapp.com/'

const instance = axios.create({
  baseURL
})
let token = localStorage.getItem('userLoginToken')

const instanceWithToken = () =>  axios.create({
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
  return instanceWithToken(token).post(`api/users/user`,{})
}

export const AddCaseApi = (token, data) => {
  return instanceWithToken(token).post(`api/case/add`,data)
}

export const DeleteCaseApi = (token, id) => {
  return instanceWithToken(token).delete(`api/case/delete`, { caseId: id })
}

export const ChangeStatusApi = (id) => {
  return instance.post(`api/case/status`, {data: {caseId: id}})
}

export const AllCasesApi = () => {
  return instance.get(`/api/case/cases`, {headers: {'Authorization': token}})
}

export const NumberOfDownloadsApi = (id) => {
  return instance.post(`/api/case/downloads`, { caseId: id })
}

export const EditingCaseApi = (id, data) => {
  return instance.post(`/api/case/edit`, {caseId: id, data:data })
}
export const PasswordRecoveryApi = (password, id) => {
  return instance.post(`/api/users/forgotpassword`,{password: password, caseId: id })
}
