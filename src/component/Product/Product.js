import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,img,price,seller,stock} =props.product;
    return (
        <div className="product-display">

            <div className="product-pictur">
                <img src={img} alt=""/>

            </div>
            <div className="">
            
               <p className="product-name">{name}</p>
            
            <p><small> {seller}</small></p>
            <p><small> ${price}</small></p>
            <p><small> left  {stock } only . buy quck </small></p>
            <button className="main-button"
            onClick={()=> props.handelAddProduct(props.product)}
            ><FontAwesomeIcon icon={faShoppingCart} />  Add to chart</button>
            </div>
            
            
        </div>
    );
};

export default Product;
