import React from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import data from '../../../Assets/data';

function Classified(props) {
    // const { products } = props;
    const products = data.products
    const randomImg = {
        imagel: 'https://picsum.photos/1000/750',
        images: 'https://picsum.photos/100',

    }
    return (
        <>
            <Container fluid className="bg-color-gry">
                <Card className="bg-color-gry border-none card-grid-lg ms-5">

                    <Row>
                        <Col className="mt-5">
                            <Card className="border-none col-sm-12 card-grid-sm bg-color-gry">
                                <Card.Body className="popins-6">
                                    <Card.Title className="fs-37">Classified product on the weeck</Card.Title>
                                    <Card.Text className="mt-5 mb-5">
                                        <Card.Link href="#" className="text-reset "><FaAngleLeft className="icon-arrow" /></Card.Link>
                                        <Card.Link href="#" className="text-reset ms-5"><FaAngleRight className="icon-arrow" /></Card.Link>
                                    </Card.Text>



                                    <Button variant="secondary" className="secondary btn-explore card-ct-low">Explore
                                        <FaAngleRight className="btn-arrow ms-3" /></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        {products.slice(0, 4).map(p => (
                            <Col key={p._id} className="mt-5 mx-3">
                                <Card style={{ height: '345px' }} className="border-none col-sm-12 card-shadow card-grid-sm popins">
                                    <Card.Img variant="bottom" src={`${process.env.PUBLIC_URL} ${p.img}`} className="card-ct card-img-fit" />
                                    <Card.Body>
                                        <Card.Title >
                                            <Card.Link href="a" className="btn-link text-reset" >{p.name}</Card.Link>
                                        </Card.Title>
                                        <Card.Subtitle className="text-secondary pt-1">${p.price}</Card.Subtitle>
                                        <Card.Text>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                </Card>
            </Container>
        </>
    )
}

export default Classified

