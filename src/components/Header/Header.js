import React from 'react';

import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  const { user, signOut } = useFirebaseAuth();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link className={styles.navLink} to="/">
          <h1 className={styles.logoText}>RFAuth</h1>
        </Link>
        {user ? (
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/dashboard">
                {user.displayName || user.email}
              </Link>
            </li>
            <li className={styles.navItem} onClick={signOut}>
              Logout
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
