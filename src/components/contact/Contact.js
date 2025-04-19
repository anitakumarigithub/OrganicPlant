import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Contact.css';
import coll from '../../utils/img/coll.jpg'

const Contact = () => {
  return (
    <div className='contact-info'>
        <h1> Contact Us</h1><br/>
        <div className='contact-container'>
            {/* <div className='co'> */}
                
           <a href='7903751209' className='icon-link'> <i class="bi bi-telephone-forward"> </i>    +91-7903751209</a>
           <a href='' className='icon-link'> <i class="bi bi-envelope-at"></i>anitakumari17934@gmail.com</a>
           <a href='https://www.linkedin.com/in/anita-kumari-60238525b/' className='icon-link'> <i class="bi bi-linkedin"></i>Anita Kumari</a>
            <a href='https://www.linkedin.com/in/anita-kumari-60238525b/' className='icon-link'><i class="bi bi-github"></i> Anita Kumari</a>
            
            

            {/* </div> */}
            {/* <div className='c-right'>
                {/* <img src={coll} alt=''/> */}
{/* 
            </div> */} 
        </div>
      
    </div>
  )
}

export default Contact;
