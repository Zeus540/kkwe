import React, {Component,Fragment} from 'react';
import styled from 'styled-components';
import Color from '../images/t2.jpg'
import Logo from '../images/logo.png'
import Footer1 from './Footer1'


const Container = styled.div`
width: 100%;
min-height:90vh;
max-height:90vh;
background-image:url(${Color});
background-size:100% 100%;
background-repeat:no-repeat;
background-position:center;
position: relative;
display:flex;

background-attachment: fixed;
@media(max-width:786px){
  background-attachment: unset;
  background-image:url(${Color});
  background-size:100% 100%;
}
@media(min-width:1024px){
  background-attachment: fixed;
}
`

const Logobox = styled.div`
display:flex;
justify-content:center;
width:100%;
position: fixed;
@media(max-width:786px){
  position: unset;

}

`
const LogoImage = styled.img`

width: 50%;
display:block;
margin:0 auto;


`

const HeadingBox = styled.div`
display:flex;
justify-content:center;
width:100%;
position: fixed;
margin-top:18%
margin-bottom: 4%;
@media(max-width:786px){
  position: unset;

}
`
const Heading = styled.h2`
color:aliceblue;
text-align:center;

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

const InnerContainer = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
height: 100vh;
background-color:#f0cfb633!important;
@media(min-width:1440px){
  height: 100vh;

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

class Jumbotron extends Component {
  render() { 
    return ( 
        <Container id="Home">
           <InnerContainer >
             <Logobox>
           <LogoImage src={Logo}/>       
            </Logobox>
            <HeadingBox>
       
           <Heading>CAPE TOWN</Heading>
            </HeadingBox>
            <Footer1></Footer1>
           </InnerContainer >
        
        </Container>
       
    );
  }
}
 
export default Jumbotron;


