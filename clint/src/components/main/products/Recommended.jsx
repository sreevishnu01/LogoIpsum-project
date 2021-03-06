import React from 'react'
import { Container } from 'react-bootstrap'
import TemplateCard from './TemplateCard';

function Recommended(props) {
    const { products } = props

    return (
        <>
            <Container className="mt-5 mb-5">
                <h1>Recommended</h1>
                <TemplateCard products={products} />
            </Container>
        </>
    )
}

export default Recommended
