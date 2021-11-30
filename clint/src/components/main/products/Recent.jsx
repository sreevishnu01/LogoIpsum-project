import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap"
import { IconContext } from "react-icons";
import { FaStar, FaAngleLeft, FaAngleRight } from "react-icons/fa"

function Recent(props) {
    const { products } = props

    return (
        <div className="mt-5">
            <Container>
                <div className="d-flex justify-content-between">
                    <h1>Recently Viewed</h1>
                    <div>
                        <FaAngleLeft size="2rem" color="#8D8D8D" />
                        <FaAngleRight size="2rem" color="#3187ED" />
                    </div>
                </div>
                <Row className="mt-5 best-deal">
                    {products.slice(0, 5).map(p => (
                        <Col key={p._id} className="">

                            <Card className="border-light mb-4 popins">
                                <Row >

                                    <Col className="p-0">
                                        <Card className="border-light">
                                            <Card.Img src={p.img} />
                                        </Card>

                                    </Col>
                                    <Col className="p-0">
                                        <Card className="border-light">
                                            <Card.Body className="p-0">
                                                <Card.Title className="mb-4">
                                                    <Card.Link href={`/pdp/${p._id}`} className="text-reset" >{p.name}</Card.Link>
                                                </Card.Title>
                                                <Card.Subtitle className="text-primary">${p.price}</Card.Subtitle>
                                                <Card.Text className="text-primary">
                                                    review
                                                </Card.Text>
                                                <Card.Text>
                                                    <IconContext.Provider value={{ color: "#3187ED", className: "global-class-name" }}>
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <span className="text-muted">(12)</span>
                                                    </IconContext.Provider>
                                                </Card.Text>

                                            </Card.Body>
                                        </Card>


                                    </Col>

                                </Row>
                            </Card>




                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Recent
