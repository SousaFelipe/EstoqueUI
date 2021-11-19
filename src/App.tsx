import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AuthProvider } from './providers/Auth'

import Estoque from './components/pages/Estoque'
import Home from './components/pages/Home'
import Login from './components/pages/Auth/Login'
import Layout from './providers/Layout'

import 'bootstrap/dist/css/bootstrap.min.css'



export default function App () {
    return (
        <AuthProvider>
            <BrowserRouter>

                <Switch>

                    <Route exact path='/' component={ Home } />
                    <Route path='/login' component={ Login } />

                    <Route component={ Layout }>
                        <Route path='/estoque' component={ Estoque } />
                    </Route>

                </Switch>

            </BrowserRouter>
        </AuthProvider>
    )
}
