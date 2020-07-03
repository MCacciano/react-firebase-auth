import React from 'react';

import {
  StyledHeader,
  H1,
  Navbar,
  NavItems,
  NavItem,
  NavLink,
} from './Header.styles';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

const Header = () => {
  const { user, signOut } = useFirebaseAuth();

  return (
    <StyledHeader>
      <Navbar>
        <NavLink to='/'>
          <H1>RFAuth</H1>
        </NavLink>
        {user ? (
          <NavItems>
            <NavItem>
              <NavLink to='/dashboard'>{user.displayName}</NavLink>
            </NavItem>
            <NavItem onClick={signOut}>Logout</NavItem>
          </NavItems>
        ) : null}
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
