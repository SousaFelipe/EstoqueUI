import { Api } from '../../services/api'
import { IUser } from './types'



const KEY = '8gj1RJTG059JdfgG'



export function setUserStorage (user: IUser | null) {
    if (user) {
        localStorage.setItem(KEY, JSON.stringify(user))
    }
    else {
        localStorage.removeItem(KEY)
    }
}


export function getUserStorage () {
    const json = localStorage.getItem(KEY)

    if ( ! json) {
        return null
    }

    return JSON.parse(json) ?? null
}


export async function LoginRequest (email: string, password: string) {
    try {
        const request = await Api.post('/login', { email, password })
        return request.data
    }
    catch (error) {
        console.log(error)
        return null
    }
}


export async function LogoutRequest (token: string) {
    try {
        const request = await Api.post('/logout', { token })
        return request.data
    }
    catch (error) {
        console.log(error)
        return null
    }
}
