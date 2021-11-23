import React from 'react'

import { Outlet } from 'react-router'

import { useAuth } from '../Auth/useAuth'



export default function Layout () : JSX.Element {


    const auth = useAuth()


    return auth.token ? (
            <main>



            </main>
        )
        : (
            <span> Usuário não autenticado </span>
        )
}
