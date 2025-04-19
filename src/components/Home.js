import React, { useEffect } from 'react';
import './Body.css';
import play from '../utils/img/play.png';
import ge from '../utils/img/ge.jpg';
import bmage_product from '../utils/Bmage.js';
import Our_Products from './products/Our_Products.js';
import Best_Selling from './bestproduct/Best_Selling.js';
import News from './news/News.js';
import Contact from './contact/Contact.js';
import newhome from '../utils/img/newhome.jpg'
import c1 from '../utils/img/c1.jpg';

function Body() {
  // Function for sliding the logo slider
  const slideSlider = () => {
    const slider = document.getElementById("logoslider");
    if (!slider) return; // Check if the element exists

    const current = slider.scrollLeft;
    const max = slider.scrollWidth - slider.clientWidth;

    if (current >= 0.9* max) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      slider.scrollTo({
        left: slider.scrollLeft + slider.offsetWidth / 3,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Set an interval to automatically scroll
    const intervalId = setInterval(() => {
      slideSlider();
    }, 3000);

    // Cleanup the interval when component unmounts or rerenders
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className='container2'>
      <div className='body-rl'>
        <div className='container-left'>
          <div className="line1">
            <div className='line-left'><h1><b>Organic </b> </h1></div>
            <div className='line-right'> <h1><b>Beauty </b></h1></div>
          </div><br />
          <div className='u2'> <h2>Face Oil</h2></div>
          <p className="line2">
         Organic face oil is a natural skincare product made from plant-based oils that deeply nourish<br/>
         and hydrate the skin, promoting a healthy, radiant complexion. Packed with essential fatty acids <br/>
         and antioxidants, it helps to rejuvenate the skin while providing a gentle, chemical-free solution <br/>
         for all skin types.
          </p><br />
          <div className='btn'>
            <button className="v1">Explore</button>
            <div className='play-image'><img src={play} alt='' /></div>
            <button className="v2">How To Buy</button>
          </div>
        </div>
        <div className='container-right'>
          <img src={c1} alt='' />
        </div>
      </div>

      <div className='bx d-flex flex-row px-7 overflow-x-scroll hide-scrollbar vw-100' id="logoslider">
        {bmage_product.map((d) => (
          <div key={d.id} >
            <div className='jx'><img src={d.image} alt='' /></div>
          </div>
        ))}
      </div>

      <Our_Products />
      <Best_Selling />
      <News />
      <Contact />
    </div>
  );
}

export default Body;
