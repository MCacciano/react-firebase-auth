import React, { useContext, useEffect, useState, useMemo } from 'react';
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
