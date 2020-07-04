import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from './pages';
import DashboardPage from './pages/DashboardPage';

// components
import AuthRoute from './components/AuthRoute';
import Header from './components/Header';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';

import './styles/App.css';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sign-in" component={LoginForm} />
        <Route path="/sign-up" component={SignUpForm} />
        <AuthRoute path="/dashboard" component={DashboardPage} />
      </Switch>
    </>
  );
};

export default App;
