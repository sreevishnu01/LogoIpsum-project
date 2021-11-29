import { Container, Row, Col, Card } from "react-bootstrap"
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa"



function Bestdeal(props) {
    const { products } = props

    return (
        <div>
            <Container className="my-5">
                <div className="d-flex justify-content-between">
                    <h1>Best deal</h1>
                    <h5 className="text-primary popins-6">View all</h5>
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
                                                    <Card.Link href={`/product/${p._id}`} className="text-reset" >{p.name}</Card.Link>
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

                {/* second */}

                <Row className="mt-5 best-deal">
                    {products.slice(5, 10).map(p => (
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
                                                    <Card.Link href={`/product/${p._id}`} className="text-reset" >{p.name}</Card.Link>
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
        </div >
    )
}

export default Bestdeal
