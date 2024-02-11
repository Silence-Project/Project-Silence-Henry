import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/Store/Index.js';
import { Auth0ProviderWithNavigate } from './Helpers/auth0ProviderWithNavigate.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store} >
      <BrowserRouter>
        <Auth0ProviderWithNavigate>
          <App />
        </Auth0ProviderWithNavigate>
      </BrowserRouter>

    </Provider>

  </React.StrictMode>
);
