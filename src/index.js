import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-un6qdex4fqxm6gy1.us.auth0.com"
    clientId="LNjh32SphVWZheHkuhUwSi7jG9u8HvEC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);

reportWebVitals();
