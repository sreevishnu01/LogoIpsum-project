import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap"

function Bestdeal(props) {
    const { products } = props;
    const randomImg = {
        imagel: 'https://picsum.photos/1000/750',
        images: 'https://picsum.photos/100',

    }
    console.log(products)
    return (
        <div>
            <Container className="my-5">
                <h1>Best deal</h1>
                <Row className="mt-5">
                    {products.map(p => (
                        <Col key={p._id} >

                            <Card className="border-light mb-4">
                                <Row >

                                    <Col>
                                        <Card className="border-light">
                                            <Card.Img src={p.url} />
                                        </Card>

                                    </Col>
                                    <Col >
                                        <Card className="border-light">
                                            <Card.Body>
                                                <Card.Title >
                                                    <Card.Link href={`/blog/${p._id}`} className="text-reset" >{p.name}</Card.Link>
                                                </Card.Title>
                                                <Card.Subtitle className="text-primary">${p.price}</Card.Subtitle>
                                                <Card.Text className="text-primary">
                                                    review
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

                <Row className="mt-5">
                    {products.map(p => (
                        <Col key={p._id} >

                            <Card className="border-light mb-4">
                                <Row >

                                    <Col>
                                        <Card className="border-light">
                                            <Card.Img src={p.url} />
                                        </Card>

                                    </Col>
                                    <Col >
                                        <Card className="border-light">
                                            <Card.Body>
                                                <Card.Title >
                                                    <Card.Link href={`/blog/${p._id}`} className="text-reset" >{p.name}</Card.Link>
                                                </Card.Title>
                                                <Card.Subtitle className="text-primary">${p.price}</Card.Subtitle>
                                                <Card.Text className="text-primary">
                                                    review
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
