import React, { useContext } from 'react';

import'./Brand.css';

const Brand = (props) => {
 
  return (
    <div className='Brand'>
        <img src={props.image} alt=''/>
        <p>{props.name}</p>
        <a href={props.link}></a>
        <div className='des'>
        {props.description}</div>
        <div className='price'>
           Buy Now | ${props.price}
        </div>
       
      
    </div>
  )
}

export default Brand;
