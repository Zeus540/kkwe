import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from '../images/logo.png';

const Nav = styled.div`
 background:#dea597;
  padding: 0 0px;
  display: flex;
  justify-content: end;
  position: sticky;
  top:0px;
  z-index:10000;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  @media (max-width: 768px) {
    background:#dea597;
    height: 0px;
  }
  .logo {
    padding: 15px 0;
  }
`

const LogoImage = styled.img`
width: 200px;
display:block;
@media(max-width:786px){
  width: 80%;
}

`

const Navbar = () => {
  return (
    <Nav>
   <div>
   <LogoImage src={Logo}  width="100%"/>   
    </div> 
      <Burger />
    </Nav>
  )
}

export default Navbar