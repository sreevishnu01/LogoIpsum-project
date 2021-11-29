import React, { useEffect } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import Cartsidebar from './Cartsidebar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { onRemov, onAdd, onDecrease, getTotal } from '../../redux/productCart';

function Cart() {
    const randomImg = {
        imagel: 'https://picsum.photos/1000/750',
        images: 'https://picsum.photos/100',

    }
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getTotal())
        // eslint-disable-next-line
    }, [cart])
    const handelRemove = (cartitem) => {
        console.log(cartitem)
        dispatch(onRemov(cartitem))
    }
    return (
        <div>
            {cart.cartitems.length === 0 ? (
                <Container className="d-flex justify-content-center"><h1>Cart Is Empty</h1></Container>
            ) : (

                <Container>

                    <h1 className="d-flex justify-content-center">My Cart</h1>
                    <Row>

                        <Col lg={9}>
                            {cart.cartitems.map(c => (
                                <Card key={c._id} className="border-light card-shadow mb-4">

                                    <Row>
                                        <Col>
                                            <Card className="border-light">
                                                <Card.Img variant="top" src={c.img || randomImg.imagel} />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="border-light">
                                                <Card.Body>
                                                    <Card.Title>{c.name}</Card.Title>
                                                    <Card.Text>
                                                        description:{c.description}
                                                    </Card.Text>
                                                    <Card.Text>price:${c.price}</Card.Text>
                                                    <Card.Text>Quantity:{c.cartQuantity}</Card.Text>
                                                    <Card.Text>SubTotal:${c.price * c.cartQuantity}</Card.Text>
                                                    <Button variant="Danger" onClick={() => dispatch(onDecrease(c))}>-</Button>
                                                    <Button className="ml-5" variant="primary" onClick={() => dispatch(onAdd(c))}>+</Button>
                                                </Card.Body>
                                                <Button variant="Danger" onClick={() => handelRemove(c)}>Remove</Button>
                                            </Card>
                                        </Col>
                                    </Row>

                                </Card>
                            ))}
                        </Col>

                        <Col lg={3}>
                            <Cartsidebar cart={cart} />
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    )
}

export default Cart
