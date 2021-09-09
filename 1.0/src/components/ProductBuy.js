import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function ProductBuy(props) {
    const { product } = props;
    return ( 
    <div key = { product._id } className = "card">
        <div className = "card-body" >
        <div className = "row"> 
            <div>
                Seller:  <Link to={`/seller/${product.seller._id}`}>
                    {product.seller?product.seller.seller.name:'deleted user'} 
                </Link> 
            </div> 
            <div className = "price"> 
                $ { product.price } 
            </div>
        </div> 
            <div className = "row">
                <h2>Pay with:</h2>
                    <h2> { product.methodofpayment } </h2> 
            </div> 
            <Rating rating = { product.rating } numReviews = { product.numReviews } likes ={product.likes} >
            </Rating> 
           
        </div> 
    </div>
    );
}