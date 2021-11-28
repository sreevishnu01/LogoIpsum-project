import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Recommended() {
    const randomImg = {
        imagel: 'https://picsum.photos/1000/750',
        images: 'https://picsum.photos/100',

    }
    return (
        <>
            <Container className="mt-5">
                <h1>Recommended</h1>
                <Row>
                    <Col className="mt-5">
                        <Card className="border-light col-sm-12 card-shadow">
                            <Card.Img variant="bottom" src={randomImg.images} className="card-ct" />
                            <Card.Body>
                                <Card.Title >
                                    <Card.Link href="a" className="btn-link text-reset stretched-link" >Holy Stone HS470
                                        Foldable GPS RC Drone</Card.Link>
                                </Card.Title>
                                <Card.Subtitle className="">$399.70</Card.Subtitle>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mt-5">
                        <Card className="border-light col-sm-12 card-shadow">
                            <Card.Img variant="bottom" src={randomImg.images} className="card-ct" />
                            <Card.Body>
                                <Card.Title >
                                    <Card.Link href="a" className="btn-link text-reset stretched-link" >Holy Stone HS470
                                        Foldable GPS RC Drone</Card.Link>
                                </Card.Title>
                                <Card.Subtitle className="">$399.70</Card.Subtitle>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>1</Col>
                    <Col>1</Col>
                    <Col>1</Col>


                </Row>
            </Container>
        </>
    )
}

export default Recommended
