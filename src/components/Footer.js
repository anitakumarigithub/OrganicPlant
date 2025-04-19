import React from 'react';
import './Footer.css';
import ft from '../utils/img/ft.png'

function Footer() {
  return (
    <div className='container4'>
        <div className='footer-content'>
        <a href='https://organic-beauty-vs.netlify.app/contact'> <h4>Work With Us</h4></a>
          <a href='https://organic-beauty-vs.netlify.app/Home'><h4>Reach Your happy Place</h4></a>
            <a href='https://www.iberdrola.com/sustainability/organic-products'><h4>Sustainability</h4></a>
            <a href='https://apeda.gov.in/OrganicProducts'><h4>Investors Policy</h4></a>
            <a href='https://www.fineorganics.com/privacy-policy/'><h4>Privacy Policy</h4></a>
             <a href='https://organicindia.com/pages/terms-condition'> <h4>Terms & Condition</h4></a>
        </div>

        <div className='footer-content2'>
            <h2>Description<p className='line3'>
            Embrace the natural beauty of organic<br/>
            skincare. Our products are crafted with<br/>
            the finest organic ingredients, free from <br/>
           harmful chemicals,to nourish and protect your<br/>
            skin. Sustainable,cruelty-free, and effective<br/>  
            because your skindeserves the best.</p></h2>
            
              <h4>  <img src={ft} alt='ft-image'/></h4>
            
            <h3> Why Our Products<br/>
            <ul>
  <li>Healthier Choice.</li>
     <li> Eco-Friendly</li>
<li> Chemical-Free.</li>
    <li>Sustainable Living.</li>
<li>Pure Ingredients.</li>
<li>Cruelty-Free.</li>
<li>Natural Beauty.</li>
<li>Nurturing Skin.</li>
<li>Gentle Care.</li>
<li>Toxin-Free.</li>
</ul> </h3>           
        </div>
        <div className='footer-content3'>
          <h1>Organic
        
          Beauty</h1>
        </div>
        
      
    </div>
  )
}

export default Footer;
