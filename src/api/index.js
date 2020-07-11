import * as axios from 'axios'
/*eslint-disable*/

const instance = axios.create({
    baseURL: 'https://v-rap.herokuapp.com/'
})

export const RegisterApi = (emailData) => {
    return instance.post(`api/auth/register`, emailData)
}

export const LoginApi = (data) => {
    return instance.post(`api/auth/login`, data)
}