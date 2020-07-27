import React, { Component } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Container = styled.div`
width:100%;
justify-content:center;
align-items:center;
margin:0 auto;
height:100%;
background:var(--secondary-color);
z-index:1;
position:relative;

`

const ContainerInner = styled.div`

color:white;
line-height:20px;
display:flex;
margin:0 auto;
padding: 0px 5% 0% 5%;
@media(max-width:640px){
  display:block;
}
`

const Heading = styled.h2`
color: var(--secondary-color);
margin: 0px;
text-align: center;
padding: 5px 5px;
`

const Box = styled.div`
background:var(--Section-color);
`

const Span = styled.span`
color:var(--secondary-color);
`

const List= styled.ul`
    color:aliceblue;
    line-height:20px;
    width:100%;
    text-align:center;
  @media(max-width:640px){
    width:100%; 
    text-align:left;
   
}
`

const Item= styled.li`
    color:aliceblue;
    list-style:none;
    
    
  `
  const Block= styled.div`
   width:100%;
   margin-top:4%;
   padding-bottom:5%;
`
  const Des= styled.p`
  margin:0 auto;
  text-align:center;
  color: var(--secondary-color);
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
           <Block1 data-aos='fade-up'>
             <Holder className="headings">
           <i class="fa fa-bell-o"></i><Heading className="headings">Events</Heading>
           <i class="fa fa-bell-o"></i>
           </Holder>
           </Block1>
          <ContainerInner>
         
          <List>
          <Block1 data-aos='fade-up'>
            <Item><Span>-</Span>&nbsp;&nbsp;Birthday Parties </Item>
            &nbsp;
            <Item><Span>-</Span>&nbsp;&nbsp;Gender Reveals </Item>
            &nbsp;
            <Item><Span>-</Span>&nbsp;&nbsp;Gala Dinners</Item>
            &nbsp;
            </Block1>
          </List>
          
          
          <List>
          <Block1 data-aos='fade-up'>
            <Item><Span>-</Span>&nbsp;&nbsp;Bridal Parties </Item>
            &nbsp;
            <Item><Span>-</Span>&nbsp;&nbsp;Graduation Party </Item>
            &nbsp;
            <Item><Span>-</Span>&nbsp;&nbsp;Conferencing </Item>
            &nbsp;
            </Block1>
          </List>
          
          
          <List>
          <Block1 data-aos='fade-up'>
            <Item><Span>-</Span>&nbsp;&nbsp;Baby Showers / Welcoming</Item>
            &nbsp;
            <Item><Span>-</Span>&nbsp;&nbsp;Engagement Parties / Surprises </Item>
            &nbsp;
            <Item><Span>-</Span>&nbsp;&nbsp;Launch Party etc. </Item>
            &nbsp;
            </Block1>
          </List>
          
          
          </ContainerInner>
          
          <Block>
          <Block1 data-aos='fade-up'>
          <Des>Please request a quote for these services below.</Des>
          </Block1>
          </Block>
          </Box>
        
        </Container>
     
    );
  }
}
export default Events;