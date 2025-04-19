import React, { useEffect } from 'react'
import best_product from '../../utils/Best'
import Item from '../Item/Item'
import './Best_Selling.css';
import Selling from '../selling/Selling';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Best_Selling = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 100,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  const slideTheSlider = () => {
    const slider = document.getElementById("bestSellingSlider");
    const current = slider.scrollLeft;
    const max = slider.scrollWidth - slider.clientWidth;
    // if slider slided max return to start position
    if (current >= 0.9*max) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
    // else slide
    else {
      slider.scrollTo({
        left: slider.scrollLeft + slider.offsetWidth / 3,
        behavior: "smooth",
      });
    }
  }

  useEffect(()=> {
    setInterval(() => {
      slideTheSlider();
      // console.log("iuhgfdfty");
    }, 4000);
  })


  return (
    <div className='best_selling'>
        <h1>Best Selling Products</h1><br/>
        <p> Discover Our Best Deals On The Balancing Gel Cleanser!Perfect For Keeping<br/>
              Your Skin Refreshed And Growing.The Perfect 
            Yet Effective Cleanser Is Now<br/> 
           <p1> Available At Unbeaten price</p1></p>
             <div className='selling d-flex flex-row px-3 overflow-x-scroll hide-scrollbar vw-100' id="bestSellingSlider">
              {/* <Slider {...settings}> */}
                {/* <div className='op'> */}
                {best_product.map((item ,i) =>{
                    return <Selling key={i} id={item.id}  name={item.name} image={item.image} description={item.description} price={item.price}/>
                })}
                
                {/* </Slider> */}
             </div>
      
    </div>
  )
}

export default Best_Selling;
