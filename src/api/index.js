import * as axios from 'axios'
/*eslint-disable*/

const baseURL = 'https://varapan.herokuapp.com/' 

const instance = axios.create({
  baseURL
})

const instanceWithToken = (token) =>  axios.create({
      baseURL,
      headers: {
        'Authorization': 'Bearer ' + token
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
  return instanceWithToken(token).delete(`api/case/delete`, {caseId: id})
}

export const ChangeStatusApi = (id, num_status) => {
  return instance.post(`api/case/status`, id, num_status)
}
