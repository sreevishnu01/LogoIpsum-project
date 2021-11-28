import React from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

function Classified(props) {
    const { products } = props;
    const randomImg = {
        imagel: 'https://picsum.photos/1000/750',
        images: 'https://picsum.photos/100',

    }
    return (
        <>
            <Container fluid className="bg-color-gry">
                <Card className="bg-color-gry border-none card-grid-lg">
                    <Container>

                        <Row>
                            <Col className="mt-5">
                                <Card className="border-none col-sm-12 card-grid-sm bg-color-gry">
                                    <Card.Body>
                                        <Card.Title>Classified product on the weeck</Card.Title>
                                        <Card.Text className="mt-5 mb-5">
                                            <Card.Link href="#" className="text-reset ml-5"><BiChevronLeftCircle size="2.5em" /></Card.Link>
                                            <Card.Link href="#" className="text-reset ml-5"><BiChevronRightCircle size="2.5em" /></Card.Link>
                                        </Card.Text>



                                        <Button variant="secondary" className="secondary">Classifieds</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {products.slice(0, 5).map(p => (
                                <Col key={p._id} className="mt-5">
                                    <Card className="border-light col-sm-12 card-shadow card-grid-sm">
                                        <Card.Img variant="bottom" src={randomImg.images} className="card-ct" />
                                        <Card.Body>
                                            <Card.Title >
                                                <Card.Link href="a" className="btn-link text-reset stretched-link" >{p.name}</Card.Link>
                                            </Card.Title>
                                            <Card.Subtitle className="">$399.70</Card.Subtitle>
                                            <Card.Text>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                    </Container >
                </Card>
            </Container>
        </>
    )
}

export default Classified

