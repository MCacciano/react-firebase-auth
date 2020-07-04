import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

import styles from '../../styles/Forms.module.css';

const SignUpForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, signInWithGoogle, createUserWithEmailAndPassword } = useFirebaseAuth();

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '') return;
    if (password === '') return;

    try {
      const newUser = await createUserWithEmailAndPassword(email, password);

      if (newUser) {
        setUser({
          displayName: newUser.displayName || newUser.email,
          email: newUser.email
        });
        history.push('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Sign Up</h1>

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
            <button className={styles.btn}>Sign Up</button>
            <button className={styles.btnGoogle} type="button" onClick={signInWithGoogle}>
              Sign In with Google
            </button>
          </div>
        </form>
        <div className={styles.goToSignIn}>
          <span>Already have an account?</span>
          <Link to="/">Sign In!</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
