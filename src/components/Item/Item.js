import React, { useContext } from 'react';
// import cartContext from '../../context/Cart';
import'./Item.css';

const Item = (props) => {
  // const cart = useContext (cartContext);
  return (
    <div className='Item'>
        <img  className='item-image'src={props.image} alt=''/>
        <p>{props.name}</p>
        <div className='des'>
        {props.description}</div>
        <div className='price'>
           Buy Now | ₹  {props.price}
        </div>
        {/* <button onClick={() =>
        cart.setItems([
          ...cart.items,
          { name: props.name, price: props.price },
        ])


        }
        > Add To Cart</button> */}
      
    </div>
  )
}

export default Item;
