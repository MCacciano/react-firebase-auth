import React from 'react';
import { Redirect } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const HomePage = () => {
  const { user } = useFirebaseAuth();

  return !!user ? <Redirect to="/dashboard" /> : <Redirect to="/sign-in" />;
};

export default HomePage;
