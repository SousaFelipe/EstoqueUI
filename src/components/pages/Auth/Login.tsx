import React, { useState } from 'react'
import { Navigate } from 'react-router'

import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import { Card, CardBody } from '../../molecules/Card'
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
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-xs-10 col-sm-8 col-md-6 col-lg-4">

                    <Card className="w-100">
                        <CardBody>
                            <Flex justify="center">
                                <Text color="cyan" size="lg">Login</Text>
                            </Flex>
                            <Flex direction="col" justify="stretch">
                                <Input type="text" placeholder="Email" className="lg" />
                                <Input type="password" placeholder="Senha" className="lg" />
                                <Button color="primary" size="lg" className="w-100" block>Entrar</Button>
                            </Flex>
                        </CardBody>
                    </Card>

                </div>
            </div>
        </div>
    )
    : (
        <Navigate replace to={ AUTENTICATED } />
    )
}
