import React, {Component,Fragment} from 'react';
import styled from 'styled-components';
import Color from '../images/tabemobi.jpg'
import Color2 from '../images/tabe.jpg'
import Footer1 from './Footer1'
import { Link } from "react-scroll";

const Container = styled.div`
width: 100%;
min-height:100%;
background-image:url(${Color2});
background-size:100% 100%;
background-repeat:no-repeat;
background-position:center;
position: relative;
background-attachment: fixed;
@media(max-width:786px){
  background-attachment: fixed;
  background-image:url(${Color});
  background-size:100% 100%;
}
@media(min-width:1024px){
  background-attachment: fixed;
}
`


const Heading1 = styled.h2`
color:var(--secondary-color);
text-align:center;
margin-top:-10%
margin-bottom: 4%;
width: 100%;
z-index:0;
font-size:50px;
text-transform:uppercase;
position: fixed;
@media(max-width:768px) {
  font-size:50px;
  position: relative;
 }

@media(max-width:769px) and (orientation: landscape){
  font-size:50px;
 }
 
 @media(min-width:769px) and (max-width:1024) and (orientation: landscape){
   font-size:50px;
   
 }
 
 @media(min-width:854px) and (max-height:480px) and (orientation: landscape){
 
   font-size:50px;
 }
 
 @media(min-width:823px) and (max-height:411px) and (orientation: landscape){
 
   font-size:50px;
 }
 
 @media(min-width:812px) and (max-height:375px) and (orientation: landscape){
 
   font-size:50px;
 }
 
 @media(min-width:1024px) and (max-height:600px) and (orientation: landscape){
  
   font-size:50px;
   
 }
`
const Heading = styled.h2`
color:aliceblue;
text-align:center;
margin-top:-2%
margin-bottom: 4%;
z-index:0;
width: 100%;
position: fixed;

@media(max-width:768px) {
  font-size:20px;
  position: relative;
 }

@media(max-width:769px) and (orientation: landscape){
 font-size:20px;
}

@media(min-width:769px) and (max-width:1024) and (orientation: landscape){
  font-size:20px;
  
}

@media(min-width:854px) and (max-height:480px) and (orientation: landscape){

  font-size:20px;
}

@media(min-width:823px) and (max-height:411px) and (orientation: landscape){

  font-size:20px;
}

@media(min-width:812px) and (max-height:375px) and (orientation: landscape){

  font-size:20px;
}

@media(min-width:1024px) and (max-height:600px) and (orientation: landscape){
 
  font-size:20px;
  
}
`


const Span = styled.span`
color:var(--secondary-color);;


`

const InnerContainer = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
height: 100vh;
background:#00000085;
@media(min-width:1440px){
  height: 50vh;
  padding-top: 20%;
}


@media(max-width:769px) and (orientation: landscape){
  height: 100vh;
  padding-top: 20%;
}

@media(min-width:769px) and (max-width:1024) and (orientation: landscape){
  height: 100vh;
  padding-top: 20%;
  
}

@media(min-width:854px) and (max-height:480px) and (orientation: landscape){
  height: 100vh;
  padding-top: 10%;
  
}

@media(min-width:823px) and (max-height:411px) and (orientation: landscape){
  height: 100vh;
  padding-top: 10%;
  
}

@media(min-width:812px) and (max-height:375px) and (orientation: landscape){
  height: 100vh;
  padding-top: 10%;
  
}

@media(min-width:1024px) and (max-height:600px) and (orientation: landscape){
  height: 100vh;
  
  
}


`

const Btn = styled.button`
border:0px;
padding: 10px 10px;
    background: #00000047;
    border-bottom: 2px solid var(--secondary-color);
color:white;
font-weight:bold;
font-size:12px;
text-transform:uppercase

border-radius:5px;
&:hover{
  background:var(--secondary-color);
  color:var(--Section-color);
  border:0px solid var(--Section-color);
}

margin:5px;
min-width: 144px;
@media(max-width:425px){
  min-width: 116px;
  padding:10px 10px
}
`

const BtnGroup = styled.div`
display: flex;
justify-content: center;
width:100%;
margin-top:5%
z-index:0;
@media(max-width:425px){
  flex-direction:column
  width:100%;
  align-items: center;
  position: relative;
}
@media(min-width:1024px){
  font-size:3vw;
  position: fixed;
  width: 100%;
}
` 



class Jumbotron extends Component {
  render() { 
    return ( 
        <Container id="Home">
           <InnerContainer >
             <Fragment>
           <Heading1>LOGO HERE</Heading1>
           <Heading>Wedding  <Span>&</Span> Events</Heading>
        
           
            <BtnGroup>
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration= {500}>
                <Btn>WEDDINGS & PACKAGES</Btn></Link>
              <Link
              activeClass="active"
              to="ContactMe"
              spy={true}
              smooth={true}
              offset={-10}
              duration= {500}>
                <Btn>GET A QOUTE</Btn></Link>
            </BtnGroup>
           
            </Fragment>
            <Footer1></Footer1>
           </InnerContainer >
        
        </Container>
       
    );
  }
}
 
export default Jumbotron;


