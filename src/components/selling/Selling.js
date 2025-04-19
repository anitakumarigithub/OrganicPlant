import React from 'react'
import'./Selling.css';

const Selling = (props) => {
  return (
    <div className='Item col-4'>
        <div className='img-container w-100'>
        <img src={props.image} className='w-100 h-auto' alt=''/></div>
        <p>{props.name}</p>
        <div className='des'>
        {props.description}</div>
        <div className='price'>
           Buy Now | ₹ {props.price}
        </div>
      
    </div>
  )
}

export default Selling;
