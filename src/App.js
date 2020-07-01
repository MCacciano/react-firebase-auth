import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from './pages';

// components
import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
