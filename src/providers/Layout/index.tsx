import React from 'react'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { useAuth } from '../Auth/useAuth'



export default function Layout (props : any) : JSX.Element {
    const auth = useAuth()

    if ( ! auth.token) {
        return <span> Usuário não autenticado </span>
    }

    return (
        <Container className="pt-4" fluid>
            <Row className="justify-content-center">
                <Col></Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={8} lg={8} xl={6}>

                    { props.component }

                </Col>
            </Row>
        </Container>
    )
}
