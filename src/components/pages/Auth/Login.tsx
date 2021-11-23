import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router'

import Button from '../../atoms/Button'
import Input from '../../atoms/Input'

import { useAuth } from '../../../providers/Auth/useAuth'

import { AUTENTICATED } from '../../../services/api'



export default function Login () {


    const auth = useAuth()

    const [email, setEmail] = useState<string | null>('eve.holt@reqres.in')
    const [password, setPassword] = useState<string | null>('cityslicka')


    async function signIn () {
        if (email && password) {
            try {
                await auth.signIn(email, password)
            }
            catch (error) {
                alert('Email ou senha incorretos')
            }
        }
        else {
            alert('Os campos "email" e "senha" devem estar preenchidos')
        }
    }


    return ( ! auth.auth) ? (
        <div style={{ width: '100%' }}>

            <Input className="md" placeholder="Medium" />

            <Input className="lg" placeholder="Large" />

        </div>
    )
    : (
        <Navigate replace to={ AUTENTICATED } />
    )
}
