import React from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



const almoxarifados = [
    {
        key: 1,
        titulo: 'Cleudivan',
        equipamentos: 12
    },
    {
        key: 2,
        titulo: 'Cleyton',
        equipamentos: 16
    },
    {
        key: 3,
        titulo: 'Raimundo',
        equipamentos: 10
    },
    {
        key: 4,
        titulo: 'Weberson',
        equipamentos: 8
    },
]



export default function Dashboard () {


    function renderAlmoxarifados () {
        return almoxarifados.map(al => (
            <Col key={ al.key } xs={12} sm={6} md={4} lg={3} xl={3} className='mt-2'>
                <Card>
                    <Card.Body>
                        <Card.Title>{ al.titulo }</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{ al.equipamentos }</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        ))
    }


    return (
        <Container className="mt-5" fluid>
            <Row>
                { renderAlmoxarifados() }
            </Row>
        </Container>
    )
}
