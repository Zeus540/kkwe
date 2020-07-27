import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = styled.div`
width: 100%;
border: none;
border-radius: 0px;
background:var(--transparent);
margin: 0px!important;
z-index: 2;
color:var(--primary-color);
position: fixed;
height:auto;
display:flex;

@media(max-width:786px){
     
  }


`

const List = styled.ul`
display: flex;
justify-content:center;
margin: 0px;
border-radius: 0px 0px 0px 10px;
align-items: center;
position: absolute;
       right: 0px;
       background: var(--Section-color);
@media(min-width:426px){
   
  }
  @media(min-width:769px){
       
       
    }
`



const ListItem = styled.li`
list-style:none;
color:white;
margin:0px 0px
transition: ease-in 200ms;
height:auto;

@media(max-width:425px){
  padding:15px 10px;
  font-size:10px;
  &:hover {
    padding: 15px 30px;
    background: var(--secondary-color);
    color: var(--Section-color);
    border-radius:0px 0px 0px 10px;
    
  }
  
}
@media(min-width:426px){
  padding:15px 10px;
  &:hover {
    padding: 15px 40px;
    background: var(--secondary-color);
    color: var(--Section-color);
    border-radius:0px 0px 0px 10px;
  }
  
}
`

const Block = styled.div`

`


class Nav extends Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
render() { 


        return (
         
      <Navbar >
        
        <Block >
      <List>
      <Block data-aos='fade-down'>
        <Link 
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={0}
          duration= {250}
          ><ListItem >Home</ListItem>
          
        </Link>
        </Block>
        <Block data-aos='fade-down'>
        <Link
          activeClass="active"
          to="AboutUs"
          spy={true}
          smooth={true}
          offset={-40}
          duration= {250}
          ><ListItem >About Us</ListItem>
        </Link>  
        </Block>

        <Block data-aos='fade-down'>
        <Link
          activeClass="active"
          to="Weddings"
          spy={true}
          smooth={true}
          offset={-40}
          duration= {250}
          ><ListItem >Packages</ListItem>
        </Link>
        </Block>
      
        <Block data-aos='fade-down'>
        <Link 
          activeClass="active"
          to="ContactMe"
          spy={true}
          smooth={true}
          offset={-40}
          duration= {250}
          ><ListItem >Contact Me</ListItem>
        </Link>
        </Block>
   
      </List>
      </Block>
      </Navbar>
     

  );
  }
}

export default Nav;
