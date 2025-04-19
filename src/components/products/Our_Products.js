import React from 'react'
import './Our_Products.css';
import data_product from '../../utils/Data';
 
import Item from '../Item/Item'

const Our_Products = () => {
  return (
    <div className='our_products'>
    <h1>Our Products</h1>
    <br />
    <div className='item'>
    {data_product.map((item,i)=>{
        return <Item key={i} id={item.id}  name={item.name} image={item.image} description={item.description} price={item.price}/>
    })}</div>
      
    </div>
  )
}

export default Our_Products;

