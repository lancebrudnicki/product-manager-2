import React, { useState } from 'react';
import axios from "axios"

const Product = props => {
    const [title, setTitle] =useState('')
    const [price, setPrice] =useState('')
    const [desc, setDesc] = useState('')

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new', {
            title,
            price,
            desc
        })
            .then(res=>console.log("Response: ", res))
            .catch(err =>console.log("Error: ", err))
    }

    return(
        <form onSubmit ={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input type = "text" onChange={e=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>price</label>
                <input type = "number" onChange={e=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label>
                <input type = "text" onChange={e=>setDesc(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default Product;