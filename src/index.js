import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { FirebaseAuthProvider } from './hooks/useFirebaseAuth';

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
