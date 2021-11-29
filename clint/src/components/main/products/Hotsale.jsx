import React from 'react'
import { Container } from 'react-bootstrap'
import TemplateCard from './TemplateCard'

function Hotsale(props) {
    const { products } = props
    return (
        <div>
            <Container className="mt-5 mb-5">
                <h1>Hot sale!</h1>
                <TemplateCard products={products} />
            </Container>
        </div>
    )
}

export default Hotsale
