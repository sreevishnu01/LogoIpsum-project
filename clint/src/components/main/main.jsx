import React from 'react'

import Classified from './products/Classified'
import Flash from './products/Flash'
import Recommended from './products/Recommended'
import data from '../../Assets/data'
import Bestdeal from './products/Bestdeal'

function Main() {
    const { products } = data;
    return (
        <>
            <Bestdeal />
            <Classified products={products} />
            <Recommended />
            <Flash />
        </>
    )
}

export default Main
