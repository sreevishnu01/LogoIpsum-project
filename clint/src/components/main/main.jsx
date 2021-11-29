import React, { useEffect, useState } from 'react'
import Classified from './products/Classified'
import Flash from './products/Flash'
import Recommended from './products/Recommended'
import data from '../../Assets/data'
import axios from '../../Assets/axiosconfig'
import Bestdeal from './products/Bestdeal'
import Test from './products/Test'

function Main() {

    const [post, setPost] = useState([])
    useEffect(() => {
        const getPost = async () => {
            const res = await axios("/product");
            setPost(res.data);
        }
        getPost()
    }, []);


    const { products } = data;
    return (
        <>
            <Bestdeal products={post} />
            <Classified products={post} />
            <Recommended products={post} />
            <Flash products={post} />
            <Test products={post}/>
        </>
    )
}

export default Main
