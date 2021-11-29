import React, { useEffect, useState } from 'react'
import Classified from './products/Classified'
import Flash from './products/Flash'
import Recommended from './products/Recommended'
import axios from '../../Assets/axiosconfig'
import Bestdeal from './products/Bestdeal'
import Hotsale from './products/Hotsale'
import Cards from './products/Cards'
import Recent from './products/Recent'
import Newsletter from './products/Newsletter'

function Main() {

    const [post, setPost] = useState([])
    useEffect(() => {
        const getPost = async () => {
            const res = await axios("/product");
            setPost(res.data);
        }
        getPost()
    }, []);

    return (
        <>
            <Bestdeal products={post} />
            <Classified products={post} />
            <Recommended products={post} />
            <Flash products={post} />
            <Hotsale products={post} />
            <Cards />
            <Recent products={post} />
            <Newsletter />
        </>
    )
}

export default Main
