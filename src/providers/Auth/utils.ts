import { Api } from '../../services/api'
import { IUser } from './types'



export function setUserStorage (user: IUser | null) {
    localStorage.setItem('U', JSON.stringify(user))
}


export function getUserStorage () {
    const json = localStorage.getItem('U')

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
        return null
    }
}
