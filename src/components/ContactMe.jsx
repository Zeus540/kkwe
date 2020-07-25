import React, { Component } from 'react';
import styled from "styled-components";
import Forms from "./form.jsx";
import Background from '../images/tabe.jpg'


const Container=styled.main`
    background-image:url(${Background});
    background-size:100% 100%;
    background-attachment:fixed;
    height:100%;
    width:calc(100%/1)
    margin:0px 0px;
    z-index:1;
    position:relative;

    @media (max-width:425px){
        height:100%;
      }
      @media (min-width:768px){
        height: 100vh;
      }
    
`

const Container1=styled.div`
background-color:#1716168c!important;
position:relative;
margin-top:0%;
left:0%;
top:-0px;
padding-bottom:5%;
width:100%;
height:100%;

@media (max-width:425px){
  height:100%;
}
    
   
`
const Textcontainer=styled.div`
    background-color:var(--transparent);
    height:100%;
    width:60%;
    margin:0px 0px;
    @media(max-width:425px){
        width:100%; 
    }
    @media(min-width:426px) and (max-width:1440px) and  (orientation: landscape){
        width:100%; 
    }

    @media(min-width:1024px){
        width:60%; 
    }
`

const Text=styled.p`
    
    color:white;
    margin:0 auto;
   
@media(max-width:425px){
    width:100%; 
}
@media(min-width:425px) and  (orientation: landscape){
    width:100%; 
}
@media(min-width:768px) {
    align-self: center;
    
}
`
const Box=styled.p`
    text-align:left;
   
`


const Heading=styled.h2`
    text-align:center;
    color:white;
    margin:0px;
    padding: 5px 5px;
`
const Holder= styled.div`
margin:0 auto;
text-align:center;
display:flex;
padding:30px 5px;
justify-content:center;
color: white;
`
const Anchor=styled.a`
text-decoration:none;
color:white;

&:hover{
    color:var(--secondary-color);
  
  }
`

const ContainerInner=styled.div`
    display:flex;
    padding: 0px 5% 0% 5%;

@media(max-width:768px){
    display:flex;
    flex-direction:column;
}
@media(min-width:769px){
   
   display:flex;
   flex-direction:row;
}
`

const FormContainer=styled.div`
    width:Calc(100%/2);
    padding:0px 5% 0px 0% ;
@media(max-width:768px){
    width:Calc(100%/1);
    padding:0px;
}
@media(min-width:1025px){
    width:Calc(100%/3);
}
`



class ContactMe extends Component {
    
render() { 
    return (
        
           <Container id="ContactMe" className="overlay">
               <Container1 >
               <Holder className="headings">
          <i class="fa fa-bell-o"></i><Heading className="headings">GET IN TOUCH</Heading>
          <i class="fa fa-bell-o"></i>
           </Holder>
               <ContainerInner>
             
                   <Textcontainer>
                <Text >
                Let’s meet for your free consultation, <br/> whether on Skype or in person at your favourite coffee spot. <br/> Bring along your thoughts, ideas and wishes as I would love to find out about you! <br/> Only Cape Town clients will be met in person. <br/><br/>
                Please reach out to me by completing the below form, <br/> I will get back to your soonest. 
               </Text>
               <Text >
               Get in touch with me <br/>
               <br/>
                <Box><i class="fa fa-envelope"alt="email"></i>&nbsp;&nbsp;Hello@kkwe.co.za</Box> 
                &nbsp;
                <Box><i class="fa fa-phone" alt="telephone"></i>&nbsp;&nbsp;084 716 2672 </Box>
               </Text>

               </Textcontainer>
               &nbsp;
               <FormContainer >
                    <Forms/>
               </FormContainer>
               </ContainerInner>
               </Container1>
           </Container>
         
         );
    }
}
 
export default ContactMe;



