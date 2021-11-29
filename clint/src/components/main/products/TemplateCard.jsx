import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { FaStar } from "react-icons/fa"

function TemplateCard(props) {
    const { products } = props
    const randomImg = {
        imagel: 'https://picsum.photos/1600/370',
        images: 'https://picsum.photos/100',

    }
    return (
        <div>
            <Row>
                {products.slice(0, 5).map(p => (
                    <Col key={p._id} className="mt-5 mx-3">
                        <Card className="border-none col-sm-12 card-shadow-low card-grid-sm">
                            <Card.Img variant="bottom" src={randomImg.images} className="card-ct" />
                            <Card.Body>
                                <Card.Title className="mb-3 ">
                                    <Card.Link href="a" className="btn-link text-reset stretched-link" >{p.name}</Card.Link>
                                </Card.Title>
                                <Card.Subtitle className="text-primary popins-6 fs-24 mb-2">${p.price}</Card.Subtitle>
                                <div className="d-flex justify-content-between">
                                    <Card.Subtitle className="text-muted">$1,300</Card.Subtitle>
                                    <Card.Subtitle className="text-muted">4.5 &nbsp;
                                        <FaStar color="#3187ED" />
                                    </Card.Subtitle>

                                </div>


                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div >
    )
}

export default TemplateCard
