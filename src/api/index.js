import axios from 'axios'
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
    return instance(`https://varapan.herokuapp.com/api/users/useredit`, {headers: {'Authorization': token},  method: 'post', data})
}

export const UserInfoApi = (token) => {
  return instance(`https://varapan.herokuapp.com/api/users/user`, {headers: {'Authorization': token},  method: 'post'})
}

export const AddCaseApi = (token, data) => {
  return instance(`https://varapan.herokuapp.com/api/case/add`, {headers: {'Authorization': token},  method: 'post', data})
}
