import * as axios from 'axios'
/*eslint-disable*/

const instance = axios.create({
    baseURL: 'https://v-rap.herokuapp.com/'
})

export const RegisterApi = (regData) => {
    return instance.post(`api/auth/register`, regData)
}

export const LoginApi = (loginData) => {
    return instance.post(`api/auth/login`, loginData)
}
