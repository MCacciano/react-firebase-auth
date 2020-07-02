import React from 'react';

import { StyledHeader, H1, Navbar, NavItems, NavItem, NavLink } from './Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <Navbar>
        <NavLink to="/">
          <H1>RFAuth</H1>
        </NavLink>
        <NavItems>
          <NavItem>
            <NavLink to="/secret">Secret</NavLink>
          </NavItem>
        </NavItems>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
