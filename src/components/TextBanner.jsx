import React, { Component } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
background: var(--Section-color);
text-align: center;
z-index:1;
position:relative;
`

const Heading = styled.h2`
color: var(--secondary-color);
margin: 0px;
text-align: center;
padding: 5px 5px;
`
const Sub = styled.p`
color: white;
margin: 0px;
text-align: center;
`

const Para = styled.p`
max-width:90%
color:white
text-align:justify
display:block
margin:0 auto;
padding-bottom:20px;
@media(max-width:768px){
  
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

class TextBanner extends Component {
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }
    render(){ 
        return ( 
            <Container id="AboutUs" >
                 <Block data-aos='fade-up'>
                <Holder className="headings">
          <i class="fa fa-bell-o"></i><Heading className="headings">Hello There!</Heading>
          <i class="fa fa-bell-o"></i>
           </Holder>
           </Block>
           <Block data-aos='fade-up'>
                <Sub>Welcome to KwaKuhle!</Sub>
                </Block>
                <br/>
                <Block data-aos='fade-up'>
                <Para>I believe in celebrating life to the fullest, no occasion is too small or too big. I want to assist you in creating the most memorable and beautiful moments by offering my services to achieve this! </Para>
                </Block>
                <Block data-aos='fade-up'>
                <Para>Below you will find the different packages for Wedding Planning as well as the Eventing services that I offer.</Para>
                </Block>
                <Block data-aos='fade-up'>
                <Para>At KwaKuhle, I believe in combining your vision and my experience to deliver a memorable and unique occasion. It would be my absolute pleasure to assist you! </Para>
                </Block>
                <br/>
                <br/>
            </Container>
        );
    }
}
 
export default TextBanner;








  


