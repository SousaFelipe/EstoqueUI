import React, { createContext, useState } from 'react'

import { IAuthProvider, IContext, IUser } from './types'
import { LoginRequest } from './utils'



export const AuthContext = createContext<IContext>({} as IContext)



export function AuthProvider ({ children } : IAuthProvider) {


    const [user, setUser] = useState<IUser | null>()


    async function signIn (email: string, password: string) {
        const response = await LoginRequest(email, password)

        setUser({
            id: response.id,
            name: response.name,
            email: response.email,
            token: response.token
        })
    }


    async function signOut () {
        setUser(null)
    }


    return (
        <AuthContext.Provider value={{ ...user, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}
