import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

const AuthRoute = ({ component: Component, ...props }) => {
  const { user } = useFirebaseAuth();

  return (
    <Route
      {...props}
      render={routeProps => (!!user ? <Component {...routeProps} /> : <Redirect to="/" />)}
    />
  );
};

export default AuthRoute;
