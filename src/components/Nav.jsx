import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from "react-scroll";


const Navbar = styled.div`
width: 100vw;
border: none;
border-radius: 0px;
background:var(--transparent);
margin: 0px!important;
z-index: 200;
color:var(--primary-color);
position: fixed;
height:auto;
display:flex;

@media(max-width:786px){
     
  }


`

const List = styled.ul`
width: 100%;
display: flex;
justify-content:end;
margin: 0px;

align-items: center;
position: absolute;
       right: 0px;
       background-color:#997d4f;
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
text-transform:uppercase;
font-size:12px;
@media(max-width:425px){
  padding:15px 10px;
  font-size:10px;
  &:hover {
    padding: 15px 15px;

    color: var(--Section-color);
   
    
  }
  
}
@media(min-width:426px){
  padding:20px 10px;
  &:hover {
    padding: 20px 40px;
    background:#faf2e8;
    color:#997d4f;
    
  }
  
}
`

const ListItemline = styled.li`
list-style:none;
color:white;
margin:0px 0px

height:auto;

`

class Nav extends Component {

render() { 


        return (
         
      <Navbar >
        
     
      <List>
      
        <Link 
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={0}
          duration= {250}
          ><ListItem >Home</ListItem>
          
        </Link>
       
        &nbsp;
          <ListItemline >|</ListItemline>
          &nbsp;

        <Link
          activeClass="active"
          to="AboutUs"
          spy={true}
          smooth={true}
          offset={-40}
          duration= {250}
          ><ListItem >ABOUT</ListItem>
        </Link>  
          

          &nbsp;
          <ListItemline >|</ListItemline>
          &nbsp;

        <Link
          activeClass="active"
          to="Weddings"
          spy={true}
          smooth={true}
          offset={-40}
          duration= {250}
          ><ListItem >Packages</ListItem>
        </Link>

        &nbsp;
          <ListItemline >|</ListItemline>
          &nbsp;

        <Link 
          activeClass="active"
          to="ContactMe"
          spy={true}
          smooth={true}
          offset={-40}
          duration= {250}
          ><ListItem >Contact</ListItem>
        </Link>
       
   
      </List>
     
      </Navbar>
     

  );
  }
}

export default Nav;
