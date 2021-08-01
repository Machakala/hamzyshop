import React from 'react';
import Product from './components/Product';
import data from './data';

export default function App() {
    return ( <
        div className = 'grid-container' >
        <
        header className = 'row' >
        <
        div >
        <
        a className = 'brand'
        href = "/index" > amazona < /a> <
        /div> <
        div >
        <
        a href = "/cart" > Carthamzy < /a> <
        a href = "/signinhamzy" > Sign In < /a> <
        /div> <
        /header> <
        main >
        <
        div className = "row center" > {
            data.products.map((product) =>
                <
                Product key = { product._id }
                product = { product }
                />
            )
        } <
        /div> <
        /main> <
        footer className = "row center" >
        All Rights reserved 2021. <
        /footer> <
        /div>
    )
}