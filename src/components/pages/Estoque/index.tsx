import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { useAuth } from '../../../providers/Auth/useAuth'

import { UNAUTENTICATED } from '../../../services/api'



export default function Estoque () : JSX.Element {


    const auth = useAuth()
    const history = useHistory()


    useEffect(() => {
        if ( ! auth.auth) {
            history.push(UNAUTENTICATED)
        }
    }, [auth])


    return (
        <Container className="mt-5" fluid>

            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={8} lg={8} xl={6}>
                    <Card>
                        <Card.Header>

                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                <Col xs={12} sm={10} md={8} lg={8} xl={6}>
                    <Card>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}
