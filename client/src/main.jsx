import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/Store/Index.js';
import {Auth0ProviderWithNavigate} from './Helpers/auth0ProviderWithNavigate.jsx';
// import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store} >
      <BrowserRouter>
        {/* <Auth0Provider 
          domain="dev-1f721esuy7zyebbq.us.auth0.com" 
          clientId="Z2XFDAzmFYFmfw9LlI6uEU8DYKjMsOqk" 
          redirectUri={window.location.origin}
        > */}
          <Auth0ProviderWithNavigate>
          <App />
        {/* </Auth0Provider> */}
        </Auth0ProviderWithNavigate>

      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);
