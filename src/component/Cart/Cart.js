import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    const total = cart.reduce ((total,prd)=>total+prd.price,0)

    let shepingCost = 0
    if (total>35){
        shepingCost = 0
    }
     else if (total>15){
        shepingCost=4.20
    }
    else if (total>0){
        shepingCost=12.12
    }
    let tax =(total/40).toFixed(2);
    const gd = (total +  shepingCost + Number(tax)).toFixed(2)
    return (
        <div>
            <h1>Order Summary </h1>
            <p> Items: {props.cart.length}</p>
            
            <p>shipping cost : {shepingCost}</p>
            <p>Tax: {tax}</p>
    <p> Total Price: {gd}</p>
    
        </div>
    );
};

export default Cart;