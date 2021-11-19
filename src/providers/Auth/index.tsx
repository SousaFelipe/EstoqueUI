import React, { createContext, useEffect, useState } from 'react'

import {
    IAuthProvider,
    IContext,
    IUser
} from './types'

import {
    getUserStorage,
    LoginRequest,
    LogoutRequest,
    setUserStorage
} from './utils'



export const AuthContext = createContext<IContext>({} as IContext)



export function AuthProvider ({ children } : IAuthProvider) {


    const [auth, setAuth] = useState<boolean>(false)
    const [user, setUser] = useState<IUser | null>()


    useEffect(() => {

        const localUser = getUserStorage()

        if (localUser && localUser.token) {
            setAuth(true)
            setUser(localUser)
        }

    }, [])


    async function signIn (email: string, password: string) {
        const response = await LoginRequest(email, password)

        let payload = {
            email: response.email,
            token: response.token
        }

        setAuth(true)
        setUser(payload)
        setUserStorage(payload)
    }


    async function signOut () {
        if (user && user.token) {
            await LogoutRequest(user.token)

            setAuth(false)
            setUser(null)
            setUserStorage(null)
        }
    }


    return (
        <AuthContext.Provider value={{ ...user, auth, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}
