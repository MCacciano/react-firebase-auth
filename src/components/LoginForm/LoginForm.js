import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

import styles from '../../styles/Forms.module.css';

const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, signInWithGoogle, signInWithEmailAndPassword } = useFirebaseAuth();

  const handleSignInWithGoogle = async e => {
    const { user: googleUser } = await signInWithGoogle();

    // ! if the user signs in with google they will have a display name
    if (googleUser) {
      const { displayName, email } = googleUser;
      setUser({ displayName, email });
      history.push('/dashboard');
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '') return;
    if (password === '') return;

    try {
      const { user: authUser } = await signInWithEmailAndPassword(email, password);

      if (authUser) {
        setUser({ displayName: authUser.displayName || authUser.email, email: authUser.email });
        history.push('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Login</h1>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label className={styles.formLabel}>
            <span className={styles.formLabelText}>Email</span>
            <input
              className={styles.formInput}
              type="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label className={styles.formLabel}>
            <span className={styles.formLabelText}>Password</span>
            <input
              className={styles.formInput}
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>Sign In</button>
            <button className={styles.btnGoogle} type="button" onClick={handleSignInWithGoogle}>
              Sign In with Google
            </button>
          </div>
        </form>
        <div className={styles.goToSignIn}>
          <span>Don't have an account?</span>
          <Link to="/sign-up">Sign Up!</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
