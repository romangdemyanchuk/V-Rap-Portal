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
    console.log('token1', token)
    console.log('data', data)
    return instance.post(`https://varapan.herokuapp.com/api/users/useredit`, {headers: {
        'Content-Type': 'application/json','Authorization': token}, data})
}

export const UserInfoApi = (token) => {
  console.log('token2', token);
  return instance.post(`api/users/user`, {}, {headers: {'Authorization': token}})
}

export const AddCaseApi = (token, data) => {
  return instance(`https://varapan.herokuapp.com/api/case/add`, {headers: {'Authorization': token},  method: 'post', data})
}

export const DeleteCaseApi = (token, data) => {
  return instance(`https://varapan.herokuapp.com/api/case/delete`, {headers: {'Authorization': token},  method: 'post', data})
}
