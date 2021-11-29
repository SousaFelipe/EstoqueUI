import React from 'react'
import { Navigate } from 'react-router'

import Button from '../../atoms/Button'
import Checkbox from '../../molecules/Checkbox'
import Image from '../../atoms/Image'
import Input from '../../atoms/Input'
import { Card, CardBody } from '../../molecules/Card'
import Text from '../../atoms/Text'
import Flex from '../../atoms/Flex'

import { useAuth } from '../../../providers/Auth/useAuth'

import { AUTENTICATED } from '../../../services/api'



export default function Login () {
    const auth = useAuth()


    const [email, setEmail] = React.useState<string | null>()
    const [password, setPassword] = React.useState<string | null>()


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
        <div className="h-center w-100 pt-5">

            <Card className="mt-4" style={{ width: '450px' }}>
                <CardBody style={{ padding: '0px' }}>
                    <Flex direction="col" align="stretch">

                        <Flex justify="center" className="bg-brand soft w-100" style={{ height: '110px' }}>
                            <div className="row w-100">

                                <Flex direction="col" className="col-7 ps-4 pt-4">
                                    <Text color="brand" size="lg">Bem-vindo de volta !</Text>
                                    <Text color="brand" size="sm" className="mt-1">Efetue o login para continuar.</Text>
                                </Flex>

                                <Flex justify="end" align="start" className="col-5">
                                    <Image src="/assets/images/profile.png" height="110px" fit="height" />
                                </Flex>

                            </div>
                        </Flex>

                        <Flex direction="col" align="stretch" className="p-4">

                            <Flex direction="col" align="stretch" className="mt-4">
                                <Text color="secondary" size="sm" style={{ marginLeft: '3px' }}>E-mail</Text>
                                <Input
                                    type="text"
                                    placeholder="Insira o e-mail de acesso"
                                    onChange={ (e: any) => setEmail(e.target.value) } />
                            </Flex>

                            <Flex direction="col" align="stretch" className="mt-4 mb-4">
                                <Text color="secondary" size="sm" style={{ marginLeft: '3px' }}>Senha</Text>
                                <Input
                                    type="password"
                                    placeholder="Insira sua senha"
                                    onChange={ (e: any) => setPassword(e.target.value) } />
                            </Flex>

                            <Checkbox
                                color="brand"
                                label={{ text: 'Lembrar de mim', color: 'secondary', size: 'sm' }}
                                style={{ marginLeft: '3px' }} />

                            <Button
                                color="primary"
                                size="md"
                                className="mt-4"
                                onClick={ signIn } block>
                                Entrar
                            </Button>

                            <Flex justify="center">
                                <Button color="clear" size="md" className="mt-2" fit>Esqueci minha senha</Button>
                            </Flex>

                        </Flex>
                    </Flex>
                </CardBody>
            </Card>

        </div>
    )
    : (
        <Navigate replace to={ AUTENTICATED } />
    )
}
