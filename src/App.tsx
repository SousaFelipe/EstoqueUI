import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './providers/Auth'

import Dashboard from './components/pages/Dashboard'
import Entradas from './components/pages/Entradas'
import Home from './components/pages/Home'
import Layout from './components/layouts/Admin'
import Login from './components/pages/Auth/Login'
import Relatorios from './components/pages/Relatorios'
import Saidas from './components/pages/Saidas'
import Transferencias from './components/pages/Transferencias'



export default function App () {
    return (
        <AuthProvider>
            <BrowserRouter>

                <Routes>

                    <Route path='/' element={ <Home/> } />
                    <Route path='/login' element={ <Login/> } />

                    <Route element={ <Layout/> }>
                        <Route path='/dashboard' element={ <Dashboard/> } />
                        <Route path='/entradas' element={ <Entradas/> } />
                        <Route path='/saidas' element={ <Saidas /> } />
                        <Route path='/transferencias' element={ <Transferencias /> } />
                        <Route path='/relatorios' element={ <Relatorios /> } />
                    </Route>

                </Routes>

            </BrowserRouter>
        </AuthProvider>
    )
}
