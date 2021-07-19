import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Productdetail = props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
        .then(res => setProduct(res.data))
        .catch(err=>console.log("Error: ", err))
        console.log(props.id)
        console.log(product)
    },[])


    return(
        <div>
            <p>Title: {product.results.title}</p>
            <p>Price: {product.results.price}</p>
            <p>Description: {product.results.desc}</p>
        </div>
    )
}

export default Productdetail;