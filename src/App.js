import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.js';
import Layout from './components/applayout/Layout';
import Our_Products from './components/products/Our_Products';
import Best_Selling from './components/bestproduct/Best_Selling.js';
import Contact from './components/contact/Contact.js';
import News from './components/news/News.js';
import ProductPage from './components/ProductPage';


const App = () => {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/Home',
          element: <Home />,
        },
        {
          path: '/our_products',
          element: <Our_Products />,
        },
        {
          path: '/best_selling_products',
          element: <Best_Selling />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/news',
          element: <News />,
        },
    
        {
          path: '/product/:name', 
          element: <ProductPage />,  
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
