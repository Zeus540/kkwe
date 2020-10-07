import React, { Component } from 'react'
import styled from 'styled-components'
import Parallax from './Parallax.jsx'
import Un2 from '../images/middle.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
width:100%;
justify-content:center;
align-items:center;
margin:0 auto;
height:100%;
background:var(--secondary-color);
background-attachment:fixed;
background-image:url(${Un2});
background-size:100% 100%;
z-index:1;
position:relative;
@media(max-width:786px){
  background:#ba9d6d;
}
`
const Overlay = styled.div`
background-color:#f0cfb633!important;
position:relative;
margin-top:0%;
left:0%;
top:-0px;
width:100%;
height:100%;
padding: 0% 0% 3% 0%;
@media (max-width:425px){
  height:100%;
}
`

const Heading = styled.h2`
color: white;
margin: 0px;
padding: 5px 5px;
text-align: center;
`

const Holder = styled.div`
margin:0 auto;
text-align:center;
display:flex;
padding:30px 5px;
justify-content:center;
color: white;
`

const Block = styled.div`

`

class Gallery extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
  render() {
    return (
        <Container id="Weddings">
          <Overlay>
          <Block data-aos='fade-up'>
          <Holder className="headings">
            <Heading className="headings">Wedding Packages</Heading>
          </Holder>
          </Block>
          <Parallax/>
          </Overlay>
        </Container>
     
    );
  }
}
export default Gallery;