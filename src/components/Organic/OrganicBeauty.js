import React from 'react';
import ge from '../../utils/img/ge.jpg';
import './Organic.css';


const OrganicBeauty = () => {
  return (
    
        <div className='body-rl'>
        <div className='container-left'>
          <div className="line1">
           <h1>Hey Visitors!! <br/>
           Welcome to our website...<br/>
           </h1>
          </div><br />
          <div className='u2'> <h2>ABOUT US</h2></div>
          <p className="line2">
            We are passionate about bringing you skincare products crafted from the finest organic ingredients.<br />
            Our mission is to offer clean, effective beauty solutions that nourish your skin and respect the <br />
            environment, all while enhancing your natural glow.
          </p><br />
          
        </div>
        <div className='container-right'>
          <img src={ge} alt='' />
        </div>
      </div>
      
    
  )
}

export default OrganicBeauty;






