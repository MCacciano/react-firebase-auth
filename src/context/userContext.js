import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/init';

const UserContext = createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   setUser(currentUser);
  // }, [localStorage.getItem('currentUser')]);

  // useEffect(() => {
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   let unsub;

  //   if (currentUser) {
  //     setUser(currentUser);
  //   } else {
  //     unsub = auth.onAuthStateChanged(authUser => {
  //       if (authUser) {
  //         localStorage.setItem('currentUser', JSON.stringify(authUser));
  //       } else {
  //         localStorage.removeItem('currentUser');
  //       }
  //     });
  //   }

  //   return currentUser ? () => null : unsub;
  // }, [user]);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserContext;
