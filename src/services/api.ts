import axios from 'axios'


export const AUTENTICATED = '/dashboard'
export const UNAUTENTICATED = '/login'


export const Api = axios.create({
    baseURL: 'https://reqres.in/api'
})
