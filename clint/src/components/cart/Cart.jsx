import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'

function Cart() {
    const randomImg = {
        imagel: 'https://picsum.photos/1000/750',
        images: 'https://picsum.photos/100',

    }
    return (
        <div>
            <Container>
                <h1 className="d-flex justify-content-center">My Cart</h1>
                <Row>
                    <Col lg={9}>
                        <Card className="border-light card-shadow mb-4">
                            <Row>
                                <Col>
                                    <Card className="border-light">
                                        <Card.Img variant="top" src={randomImg.imagel} />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="border-light">
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart
