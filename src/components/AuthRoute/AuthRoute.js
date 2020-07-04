import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import FirebaseAuthContext from '../../context/firebase';

const AuthRoute = ({ component: Component, ...props }) => {
  const { user } = useContext(FirebaseAuthContext);

  return (
    <Route
      {...props}
      render={routeProps => (!!user ? <Component {...routeProps} /> : <Redirect to="/" />)}
    />
  );
};

export default AuthRoute;
