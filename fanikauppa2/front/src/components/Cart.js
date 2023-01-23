import {useState} from "react";

const CartInfo = ({item}) => {

    return (
        <div className="productBackground">
            <p>{item.productname}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
            <p>Hinta yhteensä: {item.price * item.quantity}</p>
            <img src= {item.image} alt="tuotekuva"/>
        </div>
    )
}

const CartList = ({cart_item}) => {

    return (
        <div className='productAll'>
            <h1>Ostoskori</h1>
            {cart_item.map(c => 
                <CartInfo key={c.id} item={c}/>
            )}
        </div>
    )
}

export {CartList, CartInfo};