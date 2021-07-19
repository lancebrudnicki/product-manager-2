import React, {useEffect, useState} from "react";
import axios from 'axios';
import Product from "../componets/Product";
import Productlist from '../componets/Productlist'

const Main = props  => {
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/showall')
        .then (response => {setProduct(response.data)})
        .catch(err=>console.log("Error: ", err))
    }, [])

    return(
        <>
            <Product/>
            <Productlist product={product}/>
        </>
    )
}
export default Main;