import React from 'react'
import { Outlet } from 'react-router'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'

import { useAuth } from '../Auth/useAuth'



export default function Layout () : JSX.Element {


    const auth = useAuth()


    function getCurrentKey () : string {
        const uri = document.location.pathname
        return uri.substr(1, uri.length - 1)
    }


    return auth.token ? (
            <Stack gap={0}>
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Container>
                        <Nav activeKey={ getCurrentKey() } className="justify-content-center">
                            <Nav.Link href='/dashboard' eventKey='dashboard'>Dashboard</Nav.Link>
                            <Nav.Link href='/entradas' eventKey='entradas'>Entradas</Nav.Link>
                            <Nav.Link href='/saidas' eventKey='saidas'>Saídas</Nav.Link>
                            <Nav.Link href='/transferencias' eventKey='transferencias'>Transferências</Nav.Link>
                            <Nav.Link href='/relatorios' eventKey='relatorios'>Relatórios</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col xs={11} sm={11} md={8} lg={8} xl={8}>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </Stack>
        )
        : (
            <span> Usuário não autenticado </span>
        )
}
