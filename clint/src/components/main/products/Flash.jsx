import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'


function Flash() {
    const randomImg = {
        imagel: 'https://picsum.photos/1000/750',
        images: 'https://picsum.photos/100',

    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} >
                        <Card style={{
                            background: `url(${randomImg.imagel})`
                        }} className="card-overlay-bottom card-bg-scale card-bg-img text-white h-100 card-shadow" >
                            {/* <Card.Img style={rounded5} src={frameimg1} className="img-fluid h-100 card-bg-img" /> */}
                            <Card.ImgOverlay className="d-flex align-items-center p-3 p-sm-4">
                                <div className="w-100 mt-auto">
                                    <Card.Title >
                                        <Card.Link href="sudo" className="btn-link text-reset stretched-link">Ten tell-tale signs you need to get a new startup.
                                        </Card.Link>
                                    </Card.Title>
                                    <Card.Body>This is some text within a card body.This is some text within a card body. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam illum dolores ut magnam atque eveniet odit non veritatis, sunt dignissimos commodi mollitia? Modi!</Card.Body>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Flash
