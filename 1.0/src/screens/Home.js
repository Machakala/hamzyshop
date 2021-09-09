import React from 'react';


export default function Home(props) {
    const Getstarted = () => {
        props.history.push('/Homescreen');
    };
    return ( < div className ='homeshop' >
    <div className ='hometext'>Hello, welcome to buying and selling </div>
    <button type='button'  className ='homebutton'  onClick={Getstarted}
>Get started</button></div>
                                    );
                                };