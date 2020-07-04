import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import FirebaseAuthContext from '../context/firebase';

const DashboardPage = () => {
  const { user } = useContext(FirebaseAuthContext);

  return !user ? (
    <Redirect to="sign-in-and-sign-up" />
  ) : (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <h1>Welcome {user.displayName}!</h1>
    </div>
  );
};

export default DashboardPage;
