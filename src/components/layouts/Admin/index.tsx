import React from 'react'
import { Outlet } from 'react-router'

import { useAuth } from '../../../providers/Auth/useAuth'

import Sidenav from '../../organisms/Sidenav'

import './style.css'



export default function Layout () : JSX.Element {


    const auth = useAuth()


    return auth.token ? (
            <main className="layout">

                <Sidenav/>

                <div className="wrap">
                    <Outlet />
                </div>

            </main>
        )
        : (
            <span> Usuário não autenticado </span>
        )
}
