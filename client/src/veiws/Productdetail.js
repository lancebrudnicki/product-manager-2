import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../componets/Product';

const Poductdetail = props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product" + props.id)
        .then(res => setProduct(res.data))
    },[])


    return(
        <div>
            <p>Title: {Product.title}</p>
            <p>Price: {Product.price}</p>
            <p>Description: {Product.desc}</p>
        </div>
    )
}

export default Productdetail;