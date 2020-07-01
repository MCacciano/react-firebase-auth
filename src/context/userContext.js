import React, { createContext, useReducer, useEffect } from 'react';
import { auth } from '../firebase/init';

import { SET_USER } from './types';

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload
      };
    default:
      throw new Error('There is no action with that type');
  }
};

const initialState = {
  user: null
};

const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        console.log('authUser in context', authUser);
        setUser(authUser);
      }
    });
  }, []);

  const setUser = authUser => {
    dispatch({ type: SET_USER, payload: authUser });
  };

  return (
    <UserContext.Provider value={{ user: state.user, setUser }}>{children}</UserContext.Provider>
  );
};

export default UserContext;
