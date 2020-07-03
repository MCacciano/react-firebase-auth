import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from './pages';
import DashboardPage from './pages/DashboardPage';

// components
import AuthRoute from './components/AuthRoute';
import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <AuthRoute path='/dashboard' component={DashboardPage} />
      </Switch>
    </>
  );
};

export default App;
