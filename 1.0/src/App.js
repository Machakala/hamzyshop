import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';

export default function App() {
    return ( <
        BrowserRouter >
        <
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
        Route path = "/product/:id"
        component = { ProductScreen }
        exact / >
        <
        Route path = '/'
        component = { Homescreen }
        exact / >

        <
        /main> <
        footer className = "row center" >
        All Rights reserved 2021. by hamzy <
        /footer> <
        /div> <
        /BrowserRouter>
    )
}