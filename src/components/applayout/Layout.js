import React from 'react';
import Header from '../Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer';
import './Layout.css';
import OrganicBeauty from '../Organic/OrganicBeauty.js';


function Layout ()  {
  const location = useLocation () ; 
  const isOrganicBeauty = location.pathname === '/';

  
  
  return (
    <div>
      <Header />
      {isOrganicBeauty &&(
        <div> <OrganicBeauty />
</div>    
  )}
    
      
      
     
      {/* <Home /> */}
      <Outlet/>
     
      <Footer/>
    </div>
  )
}

export default Layout;
