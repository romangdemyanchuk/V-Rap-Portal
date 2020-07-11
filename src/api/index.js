import * as axios from 'axios'
/*eslint-disable*/

const instance = axios.create({
    baseURL: 'https://v-rap.herokuapp.com/'
})

let objLoginData = {
    login: 'smetiyk@gmail.com',
    password: '09967895'
}

export const RegisterApi = (emailData) => {
    console.log(emailData, 'emaildata')
    // const url = 'https://v-rap.herokuapp.com/api/auth/register'
    return instance.post(`api/auth/register`, emailData)
}

export const LoginApi = (data) => {
    debugger
    // const url = 'https://v-rap.herokuapp.com/api/auth/register'
    return instance.post(`api/auth/login`, data)
}