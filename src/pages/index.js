import React from 'react';
import { Redirect } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

import styles from './Home.module.css';

const HomePage = () => {
  const { user, signInWithGoogle } = useFirebaseAuth();

  const handleSignInWithGoogle = e => {
    signInWithGoogle();
  };

  return !!user ? (
    <Redirect to='/dashboard' />
  ) : (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Login</h1>

        <form className={styles.loginForm}>
          <label className={styles.formLabel}>
            <span className={styles.formLabelText}>Email</span>
            <input className={styles.formInput} type='email' name='email' />
          </label>
          <label className={styles.formLabel}>
            <span className={styles.formLabelText}>Password</span>
            <input
              className={styles.formInput}
              type='password'
              name='password'
            />
          </label>
          <div className={styles.btnContainer}>
            <button
              className={styles.btn}
              type='button'
              onClick={e => console.log('submitted')}
            >
              Sign In
            </button>
            <button
              className={styles.btnGoogle}
              type='button'
              onClick={handleSignInWithGoogle}
            >
              Sign In with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
