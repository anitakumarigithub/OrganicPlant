import React from 'react';
import './News.css';
import zor from '../../utils/img/zor.jpg';


const News = () => {
  return (
    <div className="news">
        <div className="news-left">
            <h1>Let's Make It <br/>
            Happen Together</h1>
            <form>
                <input className='b1' type="text" name="name" placeholder="     Enter your email" />
                <input className='b2' type="submit" value="Submit" />
            </form>
        </div>
        <div className="news-right">
            
            <img src={zor} alt="news-image" />
        </div>
    </div>
  );
}

export default News;
