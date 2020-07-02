import React, { useContext, useState, useEffect } from 'react';
import { auth, signInWithGoogle } from '../firebase/init';

import UserContext from '../context/userContext';

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {/* <button type="button" onClick={signInWithGoogle}>
        Sign In
      </button>
      <button type="button" onClick={() => auth.signOut()}>
        Sign Out
      </button> */}
      <button type="button" onClick={user ? () => auth.signOut() : signInWithGoogle}>
        {user ? 'Sign Out' : 'Sign In'}
      </button>
      {user && <h1>{user.displayName}</h1>}
    </div>
  );
};

export default HomePage;
