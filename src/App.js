import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/init';

// pages
import HomePage from './pages';
import SecretPage from './pages/SecretPage';

// components
import AuthRoute from './components/AuthRoute';
import Header from './components/Header';

import './App.css';

const App = () => {
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        localStorage.setItem('currentUser', JSON.stringify(authUser));
      } else {
        localStorage.removeItem('currentUser');
      }
    });

    return unsub();
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <AuthRoute path="/secret" component={SecretPage} />
      </Switch>
    </>
  );
};

export default App;
