import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100vw;

  background-color: #777;
  color: #f4f4f4;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
`;

export const H1 = styled.h1`
  font-size: 1.75rem;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  display: block;
  height: 100%;
  text-decoration: none;
  color: #f4f4f4;
`;
