import {useState} from "react";

const ProductInfo = ({product}) => {

return (
    <div className="productBackground">
        <p>{product.productname}</p>
        <p>{product.price}</p>
        <img src= {product.image} alt="tuotekuva"/>
        <button onClick={e=>CartHandler(e, product.productname, product.price)}>Lisää tuote</button>
    </div>
 )
}

const ProductList = ({product}) => {

    return (
        <div className='productAll'>
        {product.map(product =>
             <ProductInfo key={product.id} product={product}/>)}
        </div>
    )
}

export {ProductInfo, ProductList};