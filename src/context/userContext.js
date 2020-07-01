import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/init';

const UserContext = createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        console.log('authUser in context', authUser);
        setUser(authUser);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContext;
