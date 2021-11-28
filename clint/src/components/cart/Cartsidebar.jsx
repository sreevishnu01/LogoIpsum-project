import React from 'react'
import { Card } from 'react-bootstrap'

function Cartsidebar(props) {
    const { cart } = props
    return (



        <div>
            <Card
                bg="Light"
                text='light'
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>Total Cart</Card.Header>
                <Card.Body>
                    <div>
                        <Card.Title>${cart.totalAmount}</Card.Title>
                    </div>

                    <Card.Text></Card.Text>
                </Card.Body>
            </Card>
        </div >

    )
}

export default Cartsidebar
