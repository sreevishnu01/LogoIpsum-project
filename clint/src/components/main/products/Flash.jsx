import React from 'react'
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap'


function Flash(props) {

    const { products } = props
    const randomImg = {
        imagel: 'https://picsum.photos/1600/370',
        images: 'https://picsum.photos/100',

    }
    return (
        <div>
            <Container className="pt-2">
                <Card className="border-none bg-dark text-white mt-5">
                    <Card.Img src={randomImg.imagel} alt="Card image" className="card-ct" />
                    <Card.ImgOverlay>
                        <Row>
                            <Col>
                                <Card.Body className="popins-6">
                                    <Card.Title className="fs-48">Flash Sale</Card.Title>
                                    <Card.Text className="fs-16">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    </Card.Text>
                                    <Card.Title className="fs-48">05  :  42  :  19  :  54</Card.Title>

                                </Card.Body>
                            </Col>
                            {/* ss */}

                            {products.slice(0, 2).map(p => (
                                <Col key={p._id} className="mt-5">

                                    <Card className="border-light mb-4 popins card-ct-low">
                                        <Row >
                                            <Col className="p-0">
                                                <Card className="border-none ">
                                                    <Card.Img src={p.img} className="card-ct-low" />
                                                </Card>
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
                        </Row>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        </div>
    )
}

export default Flash
