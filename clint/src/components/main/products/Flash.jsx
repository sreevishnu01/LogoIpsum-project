import React from 'react'
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap'
import data from '../../../Assets/data';

function Flash(props) {

    // const { products } = props
    const products = data.flash
    return (
        <div>
            <Container>
                <Card lg={12} className="border-none text-white mt-5 bg-primary">
                    <Card.Img style={{ height: '351px' }} src="/images/flash.png" alt="Card image" className="card-ct" />
                    <Card.ImgOverlay>
                        <Row>
                            <Col sm={4}> <Card.Body >
                                <Card.Title className="popins-6 fs-48">Flash Sale</Card.Title>
                                <Card.Text className="fs-16">
                                    Lorem ipsum dolor sit amet, consectetur <br />
                                    adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore
                                </Card.Text>
                                <Card.Title className="fs-48">05  :  42  :  19  :  54</Card.Title>

                            </Card.Body></Col>
                            <Col sm={8}>
                                <Row>
                                    {products.slice(0, 2).map(p => (
                                        <Col key={p._id} className="mt-5">

                                            <Card style={{ width: '405px', height: '165px' }} className="border-light mb-4 popins card-ct-low">
                                                <Row >
                                                    <Col sm={4} className="p-0 center">
                                                        <div>
                                                            <img src={p.img} alt="img" />
                                                        </div>
                                                    </Col>
                                                    <Col className="p-0">
                                                        <Card.Body className="m-2">
                                                            <Card.Title className="mb-4">
                                                                <Card.Link href={`/product/${p._id}`} className="text-reset" >{p.name}</Card.Link>
                                                            </Card.Title>
                                                            <div className="d-flex justify-content-between mb-3">
                                                                <Card.Subtitle className="text-primary">${p.price}</Card.Subtitle>
                                                                <Card.Subtitle className="text-muted">45 left
                                                                </Card.Subtitle>
                                                            </div>
                                                            <ProgressBar now={60} className="progressbar" />
                                                        </Card.Body>

                                                    </Col>

                                                </Row>
                                            </Card>




                                        </Col>
                                    ))}
                                    <div className="d-flex justify-content-between">
                                        <Card.Subtitle className="text-muted">
                                            <div className="d-flex justify-content-start">
                                                <div className="dot active"></div>
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                            </div>
                                        </Card.Subtitle>
                                        <Card.Subtitle className="popins ">View more</Card.Subtitle>

                                    </div>

                                </Row>
                            </Col>
                        </Row>
                    </Card.ImgOverlay>
                </Card>
            </Container >
        </div >
    )
}

export default Flash
