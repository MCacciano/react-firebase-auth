import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBiYpByM4EjqkkxiSabde8SWDP3seUHQrI',
  authDomain: 'react-firebase-auth-1f1d1.firebaseapp.com',
  databaseURL: 'https://react-firebase-auth-1f1d1.firebaseio.com',
  projectId: 'react-firebase-auth-1f1d1',
  storageBucket: 'react-firebase-auth-1f1d1.appspot.com',
  messagingSenderId: '303169304360',
  appId: '1:303169304360:web:719b8ac98b27f112cf021d'
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

// always prompt for google auth when using this provider
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
