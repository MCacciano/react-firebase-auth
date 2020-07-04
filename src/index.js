import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { FirebaseAuthProvider } from './context/firebase';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FirebaseAuthProvider>
        <App />
      </FirebaseAuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
