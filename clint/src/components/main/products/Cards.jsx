import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap"
import { BiChevronRightCircle } from "react-icons/bi";

function Cards() {
    return (
        <div className="pt-3">
            <Container >

                <Row className="mb-5">
                    <Col>
                        <Card className="border-none">
                            <Card.Img src="/images/Rectangle10.png" alt="Card image" className="card-ct" />
                            <Card.ImgOverlay>
                                <Card.Body className="mt-3 mx-3 text-white">
                                    <Card.Title className="popins-2 fs-54">Explore
                                        <h1 className="popins-6 fs-54">classifieds</h1>
                                    </Card.Title>
                                    <div className="d-flex justify-content-between mt-5 pt-4">
                                        <Card.Text className="popins-3 fs-37">
                                            Over 5000 + Products
                                        </Card.Text>

                                        <Card.Link href="#"><BiChevronRightCircle size="3em" color="white" /></Card.Link>
                                    </div>

                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-none">
                            <Card.Img src="/images/Rectangle2.png" alt="Card image" className="card-ct" />
                            <Card.ImgOverlay>
                                <Card.Body className="mt-3 mx-3 text-white">
                                    <Card.Title className="popins-2 fs-54">Add
                                        <h1 className="popins-6 fs-54">classifieds</h1>
                                    </Card.Title>
                                    <div className="d-flex justify-content-between mt-5 ">
                                        <Card.Text className="popins-3 fs-37">
                                            ads, event ads <br />service requests etc
                                        </Card.Text>

                                        <Card.Link href="#" className=" mt-2 pt-4"><BiChevronRightCircle size="3em" color="white" /></Card.Link>
                                    </div>

                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className="border-none">
                            <Card.Img src="/images/Rectangle3.png" alt="Card image" className="card-ct" />
                            <Card.ImgOverlay>
                                <Card.Body className="mt-3 mx-3 text-white">
                                    <Card.Title className="popins-2 fs-54">Explore
                                        <h1 className="popins-6 fs-54">Products</h1>
                                    </Card.Title>
                                    <div className="d-flex justify-content-between mt-5 pt-4">
                                        <Card.Text className="popins-3 fs-37">Over 25000 + Products</Card.Text>

                                        <Card.Link href="#"><BiChevronRightCircle size="3em" color="white" /></Card.Link>
                                    </div>

                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-none">
                            <Card.Img src="/images/Rectangle4.png" alt="Card image" className="card-ct" />
                            <Card.ImgOverlay>
                                <Card.Body className="mt-3 mx-3 text-white">
                                    <Card.Title className="popins-2 fs-54">Partner
                                        <h1 className="popins-6 fs-54">With us</h1>
                                    </Card.Title>
                                    <div className="d-flex justify-content-between mt-5 pt-4">
                                        <Card.Text className="popins-3 fs-37">Sell your products
                                        </Card.Text>

                                        <Card.Link href="#"><BiChevronRightCircle size="3em" color="white" /></Card.Link>
                                    </div>

                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Cards
