import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/init';

const UserContext = createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser')));

  const fireAuthState = () => {
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

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem('currentUser'));

    if (u) {
      setUser(u);
      return fireAuthState();
    }

    return fireAuthState();
  }, [localStorage.getItem('currentUser')]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserContext;
