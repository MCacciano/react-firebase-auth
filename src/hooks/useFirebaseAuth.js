import React, { createContext, useEffect, useState, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

// always prompt for google auth when using this provider
googleProvider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = async () => {
  return await auth.signInWithPopup(googleProvider);
};

const FirebaseAuthContext = createContext({ user: null });
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

export const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
      return onAuthStateChanged();
    }

    return onAuthStateChanged();
  }, []);

  const onAuthStateChanged = () => {
    const unsub = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        const { displayName, email } = authUser;

        setUser({ displayName, email });
        localStorage.setItem('currentUser', JSON.stringify({ displayName, email }));
      } else {
        setUser(null);
        localStorage.removeItem('currentUser');
      }
    });

    return unsub;
  };

  const signOut = () => auth.signOut();

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      return await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err.message);
    }
  };

  const createUserWithEmailAndPassword = async (email, password) => {
    try {
      return await auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <FirebaseAuthContext.Provider
      value={{
        user,
        setUser,
        signOut,
        signInWithGoogle,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export default () => ({ ...useContext(FirebaseAuthContext) });
