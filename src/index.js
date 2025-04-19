import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './context/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <Auth0Provider
    domain="dev-2be2z1jx4dwkp6g3.us.auth0.com"
    clientId="U18u8VyFdrj3yKMmWJfP8SDWGakLIcZT"
    authorizationParams={{
      redirect_uri: window.location.origin 
    }}
  >
    {/* <CartProvider> */}
    <App />
    {/* </CartProvider> */}
    </Auth0Provider> 
 
);


reportWebVitals();
