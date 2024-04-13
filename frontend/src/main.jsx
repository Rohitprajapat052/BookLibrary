import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
    <Auth0Provider
    domain="dev-apcvsbl5bncvvqe8.us.auth0.com"
    clientId="bSuaycKeYXTqTs5XYbNPd7AMD3uuvYXc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    </SnackbarProvider>
  </BrowserRouter>
);
