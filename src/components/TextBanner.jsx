import React, { Component } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Top from '../images/over.png'

const Container = styled.div`
background:#faf2e8;
text-align: center;
position: relative;
z-index: 2;
`

const Heading = styled.h2`
color:#ac946e;
margin: 0px;
text-align: center;
padding: 5px 5px;
`


const Para = styled.p`
max-width:70%
color:black;
text-align:center;
display:block
margin:0 auto;
padding-bottom:20px;
@media(max-width:768px){
  max-width:unset;
  padding:5%;
}
`

const Holder= styled.div`
margin:0 auto;
text-align:center;
display:flex;
padding:30px 5px;
justify-content:center;
color: white;
`
const Block = styled.div`

`
const Image = styled.img`
position: absolute;
right: 0px;
height: 220%;
z-index: 125;
display:none;
`

class TextBanner extends Component {
    componentDidMount(){
        AOS.init({
          duration : 500
        })
      }
    render(){ 
        return ( 
            <Container id="AboutUs" >
             
              <Image data-aos='slide-left'  src={Top} alt={this.props.alt}/>
       
                 <Block data-aos='fade-up'>
                <Holder className="headings">
          <Heading className="headings">WELCOME TO KWAKUHLE</Heading>
          
           </Holder>
           </Block>
          
                <br/>
                <Block data-aos='fade-up'>
                <Para>I believe in celebrating life to the fullest, no occasion is too small or too big. I want to assist you in creating the most memorable and beautiful moments by offering my services to achieve this! 
                
                At KwaKuhle, I believe in combining your vision and my experience to deliver a memorable and unique occasion. It would be my absolute pleasure to assist you! </Para>
                </Block>
                <br/>
                <br/>
            </Container>
        );
    }
}
 
export default TextBanner;








  


