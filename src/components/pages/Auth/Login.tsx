import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router'

import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import { Card, CardBody, CardHeader } from '../../molecules/Card'
import Text from '../../atoms/Text'
import Flex from '../../atoms/Flex'

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
        <Flex justify="center" align="center" className="w-100">

            <Card>
                <CardBody>

                    <Flex justify="center">
                        <Text color="cyan" size="lg">Login</Text>
                    </Flex>

                    <Flex direction="col">
                        <Input type="text" placeholder="Email" className="lg" />
                        <Input type="password" placeholder="Senha" className="lg" />
                    </Flex>

                </CardBody>
            </Card>

        </Flex>
    )
    : (
        <Navigate replace to={ AUTENTICATED } />
    )
}
