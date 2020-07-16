import * as axios from 'axios'
/*eslint-disable*/

const instance = axios.create({
      baseURL:'https://varapan.herokuapp.com/'
})

export const RegisterApi = (regData) => {
  return instance.post(`api/auth/register`, regData)
}

export const LoginApi = (loginData) => {
  return instance.post(`api/auth/login`, loginData)
}

export const EditUserInfoApi = (token, data) => {
    return instance.post(`api/users/useredit`,
      {headers: {'Authorization': token}, data})
}

export const UserInfoApi = (token) => {
  return instance.post(`api/users/user`,
    {headers: {'Authorization': token}})
}

export const AddCaseApi = (token, data) => {
  return instance.post(`api/case/add`,
    {headers: {'Authorization': token}, data})
}

export const DeleteCaseApi = (token, id) => {
  return instance.delete(`api/case/delete`,
    {caseId: id}, {headers: {'Authorization': token}})
}

export const ChangeStatusApi = (id, num_status) => {
  return instance.post(`api/case/status`, id, num_status)
}
