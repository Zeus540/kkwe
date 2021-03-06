import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
 background:#997d4f;
  padding: 0 0px;
  display: flex;
  justify-content: end;
  position:fixed;
  top:0px;
  z-index:10000;
  width:100%;
  @media (max-width: 768px) {
    background:#997d4f;
    height: 0px;
  }
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default Navbar