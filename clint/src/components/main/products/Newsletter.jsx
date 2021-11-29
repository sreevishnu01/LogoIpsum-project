import React from 'react'
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap"
import { FaAngleUp } from "react-icons/fa"

function Newsletter() {
    return (
        <div className="bg-color-gry mt-5">
            <Container>
                <div className="d-flex d-flex justify-content-center text-muted popins pt-5">
                    <h3>Back to Top</h3><FaAngleUp size="2.5rem" />
                </div>
            </Container>

            <Container fluid className="bg-color-primary">

                <Container >
                    <Row className="pt-5 pb-5 text-white">
                        <Col lg={2}> <Image src="/images/envelop.png" rounded /></Col>
                        <Col>
                            <div className="position-relative">
                                <h1>Sign Up for Newsletter</h1>
                                <Image src="/images/circleElement.png" rounded className="circle-element" />
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Col>
                        <Col className="pt-5">
                            <Form className="position-relative">
                                <Image src="/images/circleElement.png" rounded className="circle-element-button  top-100 start-100 translate-middle" />
                                <Form.Control size="lg" type="text" placeholder="Enter your email here" />
                                <Button className="button-bg-gray position-button top-50  translate-middle">SUBSCRIBE</Button>

                            </Form>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </div>
    )
}

export default Newsletter
