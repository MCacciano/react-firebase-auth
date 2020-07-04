import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import FirebaseAuthContext from '../context/firebase';

const HomePage = () => {
  const { user } = useContext(FirebaseAuthContext);

  return !!user ? <Redirect to="/dashboard" /> : <Redirect to="/sign-in-and-sign-up" />;
};

export default HomePage;
