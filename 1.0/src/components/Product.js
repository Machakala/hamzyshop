import React from 'react';
import Rating from './Rating';
export default function Product(props) {
    const { product } = props;
    return ( <
        div key = { product._id }
        className = "card" >
        <
        a href = "product.html" >
        <
        img class = "medium"
        src = { product.image }
        alt = { product.name }
        /> <
        /a> <
        div class = "card-body" >
        <
        a href = "product.html" >
        <
        h2 > { product.name } < /h2> <
        /a> <
        Rating rating = { product.rating }
        numReviews = { product.numReviews }
        /> <
        div className = "row" >
        <
        div className = "price" >
        $ { product.price } <
        /div> <
        /div> <
        /div> <
        /div>
    )
};