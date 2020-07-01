import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import UserContext from '../../context/userContext';

import './AuthRoute.css';

const AuthRoute = ({ component: Component, ...props }) => {
  const { user } = useContext(UserContext);

  if (!user) {
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
