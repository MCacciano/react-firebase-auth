import React, { useContext, useState, useEffect } from 'react';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const HomePage = () => {
  const { user, signInWithGoogle, signOut } = useFirebaseAuth();

  return (
    <div>
      <button type="button" onClick={user ? signOut : signInWithGoogle}>
        {user ? 'Sign Out' : 'Sign In'}
      </button>
      {user && <h1>{user.displayName}</h1>}
    </div>
  );
};

export default HomePage;
