import axios from 'axios'
/*eslint-disable*/

// const instance = axios.create({
     const baseURL ='https://varapan.herokuapp.com'
// })

export const RegisterApi = (regData) => {
    return axios(`${baseURL}/api/auth/register`, {method: 'post', regData})
}

export const LoginApi = (loginData) => {
    return axios(`${baseURL}/api/auth/login`, {method: 'post', loginData})
}

export const EditUserInfoApi = (token, data) => {
    return axios(`${baseURL}/api/users/useredit`, {headers: {'Authorization': token,},  method: 'post' , data})
}
