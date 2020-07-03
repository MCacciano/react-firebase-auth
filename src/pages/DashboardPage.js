import React from 'react';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const DashboardPage = () => {
  const { user } = useFirebaseAuth();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <span>Welcome</span>
        <span>{user.email}!</span>
      </h1>
    </div>
  );
};

export default DashboardPage;
