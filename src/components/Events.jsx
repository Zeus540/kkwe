import React, { Component } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Top from '../images/overleft.png'

const Container = styled.div`

justify-content:center;
align-items:center;
margin:0 auto;
height:100%;
background:#ffffff;
z-index:2;
position:relative;
padding:60px;
`

const ContainerInner = styled.div`

color:black;
line-height:20px;
text-align:center;
margin:0 auto;
padding: 0px 5% 0% 5%;
width:60%;
@media(max-width:640px){
  display:block;
}
`

const Heading = styled.h2`
color:#dea597;
margin: 0px;
text-align: center;

font-size: 30px;
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
padding-top:0px;
`

const Block1 = styled.div`

`

const Text = styled.p`
font-size:18px;
padding: 18px;
`

const Image = styled.img`
position: absolute;
left: 0px;

z-index: 125;
bottom:0px;


`

class Events extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
  
  render() {
  
    return (
      
     
        <Container id="Events">
           <Box>
           <Image data-aos='slide-right' src={Top} alt={this.props.alt} />
           <Block1 data-aos='fade-up'>
             <Holder className="headings">
           <Heading className="headings">Other Events</Heading>
       
           </Holder>
           </Block1>
          <ContainerInner data-aos='fade-up'>
          <Text>Proposal Planning – Baby Showers – Gender Reveals – Conferences – Gala Dinners – Graduation Celebrations – Engagements – Launches – Birthdays</Text>
          </ContainerInner>
          
        
          </Box>
        
        </Container>
     
    );
  }
}
export default Events;