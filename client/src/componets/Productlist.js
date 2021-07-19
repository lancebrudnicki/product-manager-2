import React from "react";

const Productlist = props =>{


    return(
        <div>
            {props.product.map((product, index) =>{
                return <p key={index}> {product.title}, {product.price}, {product.desc}</p>
            })}
        </div>
    )
}
export default Productlist;