import React from 'react';
import ReactDOM from 'react-dom';

import firebase, { auth } from './firebase/init';
import { UserProvider } from './context/userContext';

import App from './App';

let app = null;

if (!app && firebase.apps.length) {
  app = ReactDOM.render(
    <React.StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
