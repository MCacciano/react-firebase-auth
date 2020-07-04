import React, { useState } from 'react';
import { Redirect, Link, Switch } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';
import { auth } from '../firebase/init';

import styles from '../styles/Home.module.css';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser, signInWithGoogle } = useFirebaseAuth();

  const handleSignInWithGoogle = e => {
    signInWithGoogle();
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '') return;
    if (password === '') return;

    try {
      const authUser = await auth.signInWithEmailAndPassword(email, password);
      console.log('email and password sign in', authUser);
    } catch (err) {
      console.log(`Error: ${err.code} -- ${err.message}`);
    }
  };

  return !!user ? <Redirect to="/dashboard" /> : <Redirect to="/sign-in" />;
};

export default HomePage;
