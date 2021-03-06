import axios from '../../Assets/axiosconfig';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { onAdd, getTotal } from '../../redux/productCart';

function Singleprodct() {

    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState([])
    const [cart, setCart] = useState([])
    const dispatch = useDispatch();
    const carts = useSelector(state => state.cart.cartitems);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios("/product/" + path);
            setPost(res.data);
            console.log(res.data)
            getCartIterm()
        }
        getPost()
    }, [path]);

    console.log(carts, 'setcart', cart);
    const handelAdd = (cartitem) => {

        dispatch(onAdd(cartitem))
        dispatch(getTotal())
        getCartIterm()
    }

    // stock
    const getCartIterm = async () => {
        try {
            if (post !== undefined) {
                const data = await carts.find((e) => {
                    return e._id === post._id
                })
                setCart(data)
            }
        } catch (error) {
            console.log("error", error)
        }

    }
    return (
        <div>
            <Container>

                <Row>
                    <Col lg={9}>
                        <Card className="border-light card-shadow mb-4">
                            <Row>
                                <Col>
                                    <Card className="border-light">
                                        <Card.Img variant="top" src={post.img} />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="border-light">
                                        <Card.Body>
                                            <Card.Title>{post.name}</Card.Title>
                                            <Card.Text>
                                                {post.description}
                                            </Card.Text>
                                            <Card.Text>price:${post.price}</Card.Text>
                                            {cart === undefined ? (
                                                <Card.Text>Stock:{post.stock}</Card.Text>
                                            ) : (
                                                <Card.Text>Stock:{cart.stockQuntity}</Card.Text>
                                            )}
                                            <Button variant="primary" onClick={() => handelAdd(post)}>Add to cart</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Singleprodct
