import React from 'react';
import { useParams } from 'react-router-dom';
import alldata from '../components/alldata';
import './ProductPage.css'

const ProductPage = () => {
  const { name } = useParams();  // Get the name parameter from the URL

  // Find the product by name (case-insensitive comparison)
  const product = alldata.find((Brand) => Brand.name.toLowerCase() === name.toLowerCase());

  if (!product) {
    return <div className='p1'> <h1>Sorry, We couldn't find any matches!! </h1>
    </div>  // Show a message if the product doesn't exist
  }

  return (
    <div className="product-details">
      <div className='product-details-left'>
      <img src={product.image} alt={product.name} />

      </div>
      <div className='product-details-right'>
      <h1>{product.name}</h1>
      <h5>{product.description}</h5>
      <h4>Price : ₹ {product.price}</h4>
      <h5>Select Size :</h5>
      <button className='t1'>    10-20 gm</button><button className='t2'>30-50 gm</button><br/><br/>
      <button className='u1'>Buy Now</button>
      <h5>Terms & Condition  :</h5>
      <h6> Available On EMI</h6> 

      </div>
      {/* <h2>{product.name}</h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      <p>Price  ${product.price}</p>
      <h5>Select Size</h5>
      <h4></h4>
      <button>Buy Now</button>
      <h5>Terms & Condition</h5>
      <p> Available On EMI</p> */}
      {/* <a 
        href={product.name}  // You may want to update this link based on your needs
        target="_blank" 
        rel="noopener noreferrer"
        className="view-product-btn"
      >
        View Product
      </a> */}
    </div>
  );
};

export default ProductPage;
