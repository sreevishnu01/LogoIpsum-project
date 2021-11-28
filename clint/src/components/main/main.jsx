import React from 'react'

import Classified from './products/Classified'
import Flash from './products/Flash'
import Recommended from './products/Recommended'
import data from '../../Assets/data'
import Bestdeal from './products/Bestdeal'

function Main() {
    const { products } = data;
    console.log(products)
    return (
        <>
            <Bestdeal products={products} />
            <Classified products={products} />
            <Recommended />
            <Flash />
        </>
    )
}

export default Main
