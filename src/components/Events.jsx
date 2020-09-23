import React, { Component } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Top from '../images/overleft.png'

const Container = styled.div`
width:100%;
justify-content:center;
align-items:center;
margin:0 auto;
height:100%;
padding-bottom:2%;
background:#faf2e8;
z-index:2;
position:relative;
`

const ContainerInner = styled.div`

color:black;
line-height:20px;
text-align:center;
margin:0 auto;
padding: 0px 5% 0% 5%;
@media(max-width:640px){
  display:block;
}
`

const Heading = styled.h2`
color:#ac946e;
margin: 0px;
text-align: center;
padding: 5px 5px;
`

const Box = styled.div`

`

const Holder= styled.div`
margin:0 auto;
text-align:center;
display:flex;
justify-content:center;
padding:30px 5px;
color: white;
`

const Block1 = styled.div`

`

const Image = styled.img`
position: absolute;
left: 0px;
height: 300%;
z-index: 125;
display:none;
bottom:0px;

`

class Events extends Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  
  render() {
  
    return (
      
     
        <Container id="Events">
           <Box>
           <Image src={Top} alt={this.props.alt} />
           <Block1 data-aos='fade-up'>
             <Holder className="headings">
           <Heading className="headings">Other Events</Heading>
       
           </Holder>
           </Block1>
          <ContainerInner data-aos='fade-up'>
          Babyshowers/Gender Reveals • Conferences • Gala Dinners • Graduations • Enagements • Launches • Birthdays
          </ContainerInner>
          
        
          </Box>
        
        </Container>
     
    );
  }
}
export default Events;