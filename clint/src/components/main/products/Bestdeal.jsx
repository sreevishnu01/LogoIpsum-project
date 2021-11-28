import { Container, Row, Col, Card } from "react-bootstrap"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Bestdeal(props) {

    const [post, setPost] = useState([])
    useEffect(() => {
        const getPost = async () => {
            const res = await axios("/product");
            setPost(res.data);
        }
        getPost()
    }, []);

    return (
        <div>
            <Container className="my-5">
                <h1>Best deal</h1>
                <Row className="mt-5">
                    {post.map(p => (
                        <Col key={p._id}>

                            <Card className="border-light mb-4">
                                <Row >

                                    <Col>
                                        <Card className="border-light">
                                            <Card.Img src={p.img} />
                                        </Card>

                                    </Col>
                                    <Col >
                                        <Card className="border-light">
                                            <Card.Body>
                                                <Card.Title >
                                                    <Card.Link href={`/product/${p._id}`} className="text-reset" >{p.name}</Card.Link>
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


            </Container>
        </div >
    )
}

export default Bestdeal
