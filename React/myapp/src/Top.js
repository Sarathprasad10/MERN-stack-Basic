import React from 'react'


function Top(props){
    return<div className='product'>
        <h2>{props.productname}</h2>
        <p>price={props.price}</p>
        <p>Description={props.Description}</p>
        </div>;

    
 // return <h1>name ={props.name}!</h1>;
}

export default Top