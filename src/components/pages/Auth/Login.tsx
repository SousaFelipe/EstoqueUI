import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import { useAuth } from '../../../providers/Auth/useAuth'

import { AUTENTICATED } from '../../../services/api'

/**
* reqres.in
* eve.holt@reqres.in
* cityslicka
*/

export default function Login () {


    const auth = useAuth()

    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)


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


    return !auth ? (
        <Container className="v-center">
            <Row className="justify-content-center w-100">
                <Col xs={12} md={6} lg={4}>

                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" onChange={ e => setEmail(e.target.value) } />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="senha" onChange={ e => setPassword(e.target.value) } />
                                </Form.Group>

                                <Button variant="primary" type="button" onClick={ signIn }> Entrar </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )
    : (
        <Navigate replace to={ AUTENTICATED } />
    )
}
