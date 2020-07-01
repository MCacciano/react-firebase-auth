import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import UserContext from '../../context/userContext';

import './AuthRoute.css';

const AuthRoute = ({ component: Component, ...props }) => {
  const [gate, setGate] = useState(true);
  const { user } = useContext(UserContext);

  // ! there has to be a better way to handle the flashing of
  // ! of non auth components while waiting for firebase auth
  useEffect(() => {
    setTimeout(() => {
      if (user === null) {
        setGate(false);
      }
    }, 2000);
  }, [user]);

  if (gate) {
    return (
      <div className='loading-container'>
        <div className='loading-ripple'>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <Route
      {...props}
      render={routeProps =>
        !!user ? <Component {...routeProps} /> : <Redirect to='/' />
      }
    />
  );
};

export default AuthRoute;
