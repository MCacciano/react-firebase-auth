import React, { useContext } from 'react';
import { auth, signInWithGoogle } from '../firebase/init';

import UserContext from '../context/userContext';

const HomePage = () => {
  // const { user } = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const handleSignOut = () => {
    auth.signOut();
    localStorage.removeItem('currentUser');
  };

  return (
    <div>
      <button type="button" onClick={signInWithGoogle}>
        Sign In
      </button>
      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
      {user && <h1>{user.displayName}</h1>}
    </div>
  );
};

export default HomePage;
